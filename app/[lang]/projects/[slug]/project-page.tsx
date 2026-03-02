'use client';

import { readFragment, type FragmentOf } from 'gql.tada';
import styled, { createGlobalStyle, useTheme } from 'styled-components';

import {
  Body,
  MultiParagraphText,
  Small,
} from '@/app/_components/common/typography';
import { getTagVariant } from '@/app/_components/projects/ProjectListItem';
import { LinkButton } from '@/app/_components/common/LinkButton';
import { Button, ButtonIconType } from '@/app/_components/common/Button';
import { Flex } from '@/app/_components/common/Flex';
import Image from 'next/image';
import { ImageGallery } from '@/app/_components/common/ImageGallery';
import { ResponsiveImageFragment } from '@/app/_components/common/image-fragments';
import { Tag } from '@/app/_components/common/Tag';
import {
  ProjectPageFragment,
  type ProjectPageData,
} from '@/app/[lang]/projects/[slug]/fragments';
import { H3Style } from '@/theme/typography';

const ProjectPageGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background.sections.projects};
  }
`;

const StyledProjectPage = styled.div`
  min-height: 100vh;
`;

const StyledNav = styled.nav`
  max-width: ${({ theme }) => theme.pageWidth};

  padding-left: ${({ theme }) => theme.pageMaxPaddingLeft};
  padding-right: ${({ theme }) => theme.pageMaxPaddingRight};
  padding-top: ${({ theme }) => theme.spacings.s24};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 5vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spacings.s4};
    padding-right: ${({ theme }) => theme.spacings.s24};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: ${({ theme }) => theme.spacings.s16};
    border-bottom: 1px solid ${({ theme }) => theme.colors.typography.primary};
  }
`;

const NavContentWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacings.s16};
`;

const NavButtonWrapper = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacings.s16};

  ${({ theme }) => theme.mediaQueries.lg} {
    position: relative;
    left: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: ${({ theme }) => theme.spacings.s4};
  }
`;

const DesktopLinks = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

const MobileLinks = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    padding-bottom: ${({ theme }) => theme.spacings.s40};
  }
`;

const ProjectHeader = styled.h1`
  ${H3Style};
  margin: 0;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};

  padding-left: ${({ theme }) => theme.pageMaxPaddingLeft};
  padding-right: ${({ theme }) => theme.pageMaxPaddingRight};
  padding-top: ${({ theme }) => theme.spacings.s24};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 5vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spacings.s24};
    padding-right: ${({ theme }) => theme.spacings.s24};
  }
`;

const ShortDescription = styled(Body)<{ $hasLongDescription: boolean }>`
  font-weight: ${({ theme, $hasLongDescription }) =>
    $hasLongDescription ? theme.fontWeights.medium : theme.fontWeights.light};
  max-width: ${({ theme, $hasLongDescription }) =>
    $hasLongDescription ? theme.smallPageWidth : undefined};
`;

const BodyImage = styled(Image)`
  border-radius: ${({ theme }) => theme.spacings.s12};
`;

export const ProjectPage = ({
  data,
  activeTitle,
}: {
  data: FragmentOf<typeof ProjectPageFragment>;
  activeTitle: string;
}) => {
  const { smallPageWidth } = useTheme();

  if (!data) {
    return null;
  }

  const imageSizes = `(max-width: ${smallPageWidth}) 100vw, ${smallPageWidth}`;

  const itemData = readFragment(ProjectPageFragment, data) as ProjectPageData;

  const linkButtons = (
    <Flex flexDirection="row" gap="s8" flexWrap="wrap">
      {itemData.links.map(link => (
        <LinkButton
          key={link.icon}
          iconLeft={(link.icon as ButtonIconType) || undefined}
          href={link.url}
          target="_blank"
          isExternal={true}
        />
      ))}
    </Flex>
  );

  return (
    <StyledProjectPage>
      <ProjectPageGlobalStyle />
      <StyledNav>
        <NavContentWrapper>
          <Flex alignItems="center" gap="s16">
            <NavButtonWrapper>
              <Button
                iconLeft="mdiArrowLeft"
                onClick={() => window.history.back()}
                variant="basic"
              />
            </NavButtonWrapper>
            <ProjectHeader>{itemData.title}</ProjectHeader>
          </Flex>
          <DesktopLinks>{linkButtons}</DesktopLinks>
        </NavContentWrapper>
      </StyledNav>
      <Content>
        <MobileLinks>{linkButtons}</MobileLinks>
        <Flex flexDirection="column" gap="s12" mb="s40">
          {itemData.activeYearList && (
            <Small>{`${activeTitle}: ${itemData.activeYearList}`}</Small>
          )}
          <Flex flexDirection="row" gap="s12" flexWrap="wrap">
            {itemData.skills.map(skill => (
              <Tag
                key={skill.name}
                variant={getTagVariant(skill.skillType)}
                text={skill.name || ''}
              />
            ))}
          </Flex>
        </Flex>
        <ImageGallery images={itemData.galleryImages} />
        <Flex flexDirection="column" gap="s24" alignItems="center" mt="s40">
          <ShortDescription
            dangerouslySetInnerHTML={{ __html: itemData.shortDescription }}
            $hasLongDescription={itemData.body.length > 0}
          />
          {itemData.body.length > 0 &&
            itemData.body.map((item, index) => {
              if ('image' in item) {
                const img = readFragment(
                  ResponsiveImageFragment,
                  item.image.responsiveImage
                );
                return img ? (
                  <Flex
                    key={index}
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: img.aspectRatio,
                    }}
                  >
                    <BodyImage
                      src={img.src}
                      alt={img.alt || ''}
                      fill={true}
                      placeholder="blur"
                      blurDataURL={img.base64 || undefined}
                      sizes={imageSizes}
                      style={{ objectFit: 'cover' }}
                    />
                  </Flex>
                ) : null;
              }
              if ('text' in item && item.text != null) {
                return (
                  <MultiParagraphText
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                );
              }
              return null;
            })}
        </Flex>
      </Content>
    </StyledProjectPage>
  );
};
