import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { Info } from '../common/typography';
import styled from 'styled-components';
import { Flex } from '../common/Flex';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import { IconType } from '../common/MdiIcon';

export const AboutMeFragment = graphql(`
  fragment AboutMeFragment on AboutMeSectionRecord {
    body
    backgroundColor {
      hex
    }
    contactButtonIcon
    contactButtonText
    image {
      url
    }
  }
`);

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
    <Section bgColor={aboutMeData.backgroundColor?.hex}>
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
    </Section>
  );
};
