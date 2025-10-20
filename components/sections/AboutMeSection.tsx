import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import styled, { useTheme } from 'styled-components';
import { Flex } from '../common/Flex';
import { BasicSection } from '../common/Section';
import { Button } from '../common/Button';
import { IconType } from '../common/MdiIcon';
import { BodyStyle } from '../../theme/typography';

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
  padding-top: ${({ theme }) => theme.spacings.s128};
  padding-bottom: ${({ theme }) => theme.spacings.s256};
  min-height: calc(100vh - ${({ theme }) => theme.spacings.s128});
`;

const StyledAboutMe = styled.div`
  max-width: ${({ theme }) => theme.smallPageWidth};
`;

const ContentContainer = styled(Flex)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.s64};

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  width: ${({ theme }) => theme.spacings.s192};
  height: fit-content;
`;

const StyledText = styled.div`
  ${BodyStyle};
  color: ${({ theme }) => theme.colors.typography.light};
  p {
    margin-bottom: ${({ theme }) => theme.spacings.s16};
  }
`;

export const AboutMeSection = ({
  data,
  onScrollToContacts,
}: {
  data: FragmentOf<typeof AboutMeFragment> | null;
  onScrollToContacts: () => void;
}) => {
  const aboutMeData = readFragment(AboutMeFragment, data);

  if (!aboutMeData) {
    return null;
  }

  const { colors } = useTheme();

  return (
    <StyledSection $bgColor={colors.background.sections.aboutMe}>
      <StyledAboutMe>
        <ContentContainer>
          <StyledImage src={aboutMeData.image?.url} />
          <Flex flexDirection="column" gap="s64" alignItems="flex-start">
            {aboutMeData.body && (
              <StyledText
                dangerouslySetInnerHTML={{ __html: aboutMeData.body }}
              />
            )}
            {aboutMeData.contactButtonText && (
              <Button
                variant="secondaryGhost"
                text={aboutMeData.contactButtonText}
                iconRight={aboutMeData.contactButtonIcon as IconType}
                onClick={() => onScrollToContacts()}
              />
            )}
          </Flex>
        </ContentContainer>
      </StyledAboutMe>
    </StyledSection>
  );
};
