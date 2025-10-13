import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H1, Subtitle } from '../common/typography';
import styled from 'styled-components';
import { Flex } from '../common/Flex';
import { LanguageSelector } from '../LanguageSelector';
import { Background } from '../../assets/images/aquarium/Background';
import { Fish } from '../../assets/images/aquarium/fishes/Fish';

export const HeaderFragment = graphql(`
  fragment HeaderFragment on HeaderSectionRecord {
    title
    name
    subtitle
  }
`);

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ContentContainer = styled(Flex)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s16};
  margin-left: ${({ theme }) => theme.spacings.s192};
  margin-right: ${({ theme }) => theme.spacings.s80};

  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: ${({ theme }) => theme.spacings.s40};
    margin-right: ${({ theme }) => theme.spacings.s40};
  }
`;

export const HeaderSection = ({
  data,
}: {
  data: FragmentOf<typeof HeaderFragment> | null;
}) => {
  const headerData = readFragment(HeaderFragment, data);

  if (!headerData) {
    return null;
  }

  return (
    <StyledHeader>
      <BackgroundWrapper>
        <Background />
        <Fish variant="javascript" positionY="30%" delayS={-1} />
        <Fish variant="vue" positionY="40%" delayS={5} />
        <Fish variant="figma" positionY="50%" delayS={10} />
        <Fish variant="react" positionY="60%" delayS={15} />
        <Fish variant="typescript" positionY="70%" delayS={20} />
      </BackgroundWrapper>
      <LanguageSelector />
      <ContentContainer>
        <H1 color="light">
          {headerData.title} {headerData.name}
        </H1>
        <Subtitle color="tertiary">{headerData.subtitle}</Subtitle>
      </ContentContainer>
    </StyledHeader>
  );
};
