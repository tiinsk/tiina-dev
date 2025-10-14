import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H1, Subtitle } from '../common/typography';
import styled from 'styled-components';
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
  overflow: hidden;
  width: 100vw;
  height: 120vh;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-end;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s16};
  justify-content: center;

  margin-left: ${({ theme }) => theme.spacings.s192};
  margin-right: ${({ theme }) => theme.spacings.s192};

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
      <div>
        <Background />
        <Fish variant="javascript" positionY="20%" delayS={-1} />
        <Fish variant="vue" positionY="30%" delayS={5} />
        <Fish variant="figma" positionY="40%" delayS={10} />
        <Fish variant="react" positionY="50%" delayS={15} />
        <Fish variant="typescript" positionY="60%" delayS={20} />
      </div>
      <ContentContainer>
        <LanguageSelector />
        <HeaderText>
          <H1 color="light">
            {headerData.title} {headerData.name}
          </H1>
          <Subtitle color="tertiary">{headerData.subtitle}</Subtitle>
        </HeaderText>
      </ContentContainer>
    </StyledHeader>
  );
};
