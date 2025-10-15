import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import styled from 'styled-components';
import { BodyStyle } from '../../theme/typography';
import { Flex } from '../common/Flex';
import { LinkButton } from '../common/LinkButton';
import { ButtonIconType } from '../common/Button';
import PostBoxTopSvg from '../../assets/images/postbox/postbox-top.svg';
import PostBoxBottomSvg from '../../assets/images/postbox/postbox-bottom.svg';
import MailSvg from '../../assets/images/postbox/mail.svg';

const BOTTOM_BACKGROUND_HEIGHT = '20vh';
const BOTTOM_BACKGROUND_HEIGHT_SM = '10vh';
const POST_BOX_WIDTH = 300;
const MAIL_WIDTH = 85;
const MAIL_HEIGHT = 269;

export const ContactFragment = graphql(`
  fragment ContactFragment on ContactSectionRecord {
    title
    backgroundColor {
      hex
    }
    links {
      title
      url
      icon
      target
    }
    buttonLinks {
      title
      url
      icon
      target
    }
  }
`);

const ContactLink = styled.a`
  ${BodyStyle};
  color: ${({ theme }) => theme.colors.typography.primary};
`;

const BackgroundGround = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${BOTTOM_BACKGROUND_HEIGHT};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  z-index: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: ${BOTTOM_BACKGROUND_HEIGHT_SM};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
  }
`;

const TextContent = styled(Flex)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s16};

  flex: 1 0 0;
`;

const PostBoxContainer = styled.div`
  flex: 1 0 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: calc(
    ${BOTTOM_BACKGROUND_HEIGHT} - ${({ theme }) => theme.spacings.s80}
  );

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: calc(
      ${BOTTOM_BACKGROUND_HEIGHT_SM} - ${({ theme }) => theme.spacings.s80}
    );
  }
`;

const PostBoxTopImg = styled.img`
  width: ${POST_BOX_WIDTH}px;
  z-index: 1;
  position: relative;
  top: 1px; // To prevent some rendering issues (on mobile at least), where there is a small gap between the top and bottom post box images
`;

const PostBoxBottomImg = styled.img`
  width: ${POST_BOX_WIDTH}px;
  z-index: 3;
`;

const MailImg = styled.img`
  width: ${MAIL_WIDTH}px;
  position: sticky;

  //Position the mail image to middle of the the post box
  left: calc(
    100vw - ${MAIL_WIDTH}px - ${({ theme }) => theme.spacings.s64} -
      ${POST_BOX_WIDTH / 2}px + ${MAIL_WIDTH / 2}px
  );
  top: calc(100dvh - ${BOTTOM_BACKGROUND_HEIGHT} - ${MAIL_HEIGHT}px);
  z-index: 2;

  ${({ theme }) => theme.mediaQueries.md} {
    left: calc(
      100vw - ${MAIL_WIDTH}px - ${({ theme }) => theme.spacings.s24} -
        ${POST_BOX_WIDTH / 2}px + ${MAIL_WIDTH / 2}px
    );
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    top: calc(100dvh - ${BOTTOM_BACKGROUND_HEIGHT_SM} - ${MAIL_HEIGHT}px);
  }
`;

export const ContactSection = ({
  data,
  order,
  ref,
}: {
  data: FragmentOf<typeof ContactFragment> | null;
  order: number;
  ref: React.RefObject<HTMLElementTagNameMap['section'] | null>;
}) => {
  const contactData = readFragment(ContactFragment, data);

  if (!contactData) {
    return null;
  }

  return (
    <>
      <MailImg src={MailSvg} />
      <Section
        name="Contacts"
        bgColor={contactData.backgroundColor?.hex}
        order={order}
        forwardRef={ref}
        useMaxWidth={false}
      >
        <BackgroundGround />
        <H2>{contactData.title}</H2>
        <ContentContainer>
          <TextContent>
            <Flex
              flexDirection="row"
              gap="s16"
              flexWrap="wrap"
              alignItems="flex-start"
            >
              {contactData.buttonLinks.map(link => (
                <LinkButton
                  key={link.title}
                  iconLeft={(link.icon as ButtonIconType) || undefined}
                  href={link.url}
                  target={link.target || undefined}
                />
              ))}
            </Flex>
            {contactData.links.map(link => (
              <ContactLink key={link.title} title={link.title} href={link.url}>
                {link.title}
              </ContactLink>
            ))}
          </TextContent>
          <PostBoxContainer>
            <PostBoxTopImg src={PostBoxTopSvg} />
            <PostBoxBottomImg src={PostBoxBottomSvg} />
          </PostBoxContainer>
        </ContentContainer>
      </Section>
    </>
  );
};
