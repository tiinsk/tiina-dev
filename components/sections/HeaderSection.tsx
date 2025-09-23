import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H1, Subtitle } from '../common/typography';
import styled from 'styled-components';
import { Flex } from '../common/Flex';
import { LanguageSelector } from '../LanguageSelector';

export const HeaderFragment = graphql(`
  fragment HeaderFragment on HeaderSectionRecord {
    title
    name
    subtitle
    image {
      url
    }
  }
`);

const StyledHeader = styled.div<{ $bgImage?: string }>`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: ${({ $bgImage }) => $bgImage && `url(${$bgImage})`};
  background-size: cover;
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
    <StyledHeader $bgImage={headerData.image?.url}>
      <LanguageSelector />
      <Flex flexDirection="column" gap="s16" ml="s192">
        <H1 color="tertiary">
          {headerData.title} {headerData.name}
        </H1>
        <Subtitle>{headerData.subtitle}</Subtitle>
      </Flex>
    </StyledHeader>
  );
};
