import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { Info } from '../common/typography';
import styled from 'styled-components';
import { Flex } from '../common/Flex';
import { BasicSection } from '../common/Section';
import { Button } from '../common/Button';
import { IconType } from '../common/MdiIcon';

export const AboutMeFragment = graphql(`
  fragment AboutMeFragment on AboutMeSectionRecord {
    body
    contactButtonIcon
    contactButtonText
    image {
      url
    }
  }
`);

const StyledSection = styled(BasicSection)`
  margin-top: ${({ theme }) => theme.spacings.s80};
`;

const StyledAboutMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: ${({ theme }) => theme.spacings.s192};
  height: fit-content;
`;

export const AboutMeSection = ({
  data,
}: {
  data: FragmentOf<typeof AboutMeFragment> | null;
}) => {
  const aboutMeData = readFragment(AboutMeFragment, data);

  if (!aboutMeData) {
    return null;
  }

  return (
    <StyledSection $bgColor="#2F5C6D">
      <StyledAboutMe>
        <Flex flexDirection="row" gap="s64">
          <StyledImage src={aboutMeData.image?.url} />
          <Flex flexDirection="column" gap="s64" alignItems="flex-start">
            <Info dangerouslySetInnerHTML={{ __html: aboutMeData.body }} />
            {aboutMeData.contactButtonText && (
              <Button
                text={aboutMeData.contactButtonText}
                iconRight={aboutMeData.contactButtonIcon as IconType}
              />
            )}
          </Flex>
        </Flex>
      </StyledAboutMe>
    </StyledSection>
  );
};
