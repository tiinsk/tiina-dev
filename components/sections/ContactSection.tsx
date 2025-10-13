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
  height: 40vh;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  z-index: 0;
`;

const Content = styled(Flex)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s16};
  max-width: 50%;
`;

const PostBoxContainer = styled(Flex)`
  position: absolute;
  flex-direction: column;
  right: 0;
  bottom: 40vh;
  width: 50%;
`;

const PostBoxTopImg = styled.img`
  width: 280px;
  z-index: 1;
`;

const PostBoxBottomImg = styled.img`
  width: 280px;
  z-index: 3;
`;

const MailImg = styled.img`
  width: 85px;
  position: sticky;
  left: calc(50% + 83px);
  top: 500px;
  z-index: 2;
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
      >
        <BackgroundGround />
        <H2>{contactData.title}</H2>
        <Content>
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
        </Content>
        <PostBoxContainer>
          <PostBoxTopImg src={PostBoxTopSvg} />
          <PostBoxBottomImg src={PostBoxBottomSvg} />
        </PostBoxContainer>
      </Section>
    </>
  );
};
