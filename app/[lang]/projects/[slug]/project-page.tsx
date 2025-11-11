'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import styled from 'styled-components';

import { Body, H3, Small } from '@/app/_components/common/typography';
import { getTagVariant } from '@/app/_components/projects/ProjectListItem';
import { LinkButton } from '@/app/_components/common/LinkButton';
import { Button, ButtonIconType } from '@/app/_components/common/Button';
import { Flex } from '@/app/_components/common/Flex';
import { ImageGallery } from '@/app/_components/common/ImageGallery';
import { Tag } from '@/app/_components/common/Tag';
import { ProjectPageFragment } from '@/app/[lang]/projects/[slug]/fragments';

const StyledProjectPage = styled.div`
  background-color: ${({ theme }) => theme.colors.background.sections.projects};
  min-height: 100vh;
`;

const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background.sections.projects};
  z-index: ${({ theme }) => theme.zIndex.menus};

  border-bottom: 1px solid ${({ theme }) => theme.colors.typography.primary};
  display: flex;
  padding: ${({ theme }) => theme.spacings.s16};
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.smallPageWidth};

  margin-left: ${({ theme }) => theme.pageMaxPaddingLeft};
  margin-right: ${({ theme }) => theme.pageMaxPaddingRight};
  padding-top: ${({ theme }) => theme.spacings.s128};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 5vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spacings.s24};
    padding-right: ${({ theme }) => theme.spacings.s24};
  }
`;

export const ProjectPage = ({
  data,
  activeTitle,
}: {
  data: FragmentOf<typeof ProjectPageFragment>;
  activeTitle: string;
}) => {
  if (!data) {
    return null;
  }

  const itemData = readFragment(ProjectPageFragment, data);

  return (
    <StyledProjectPage>
      <StyledNav>
        <Button
          iconLeft="mdiArrowLeft"
          onClick={() => window.history.back()}
          variant="basic"
        />
      </StyledNav>
      <Content>
        <H3>{itemData.title}</H3>
        <Flex flexDirection="row" gap="s8" flexWrap="wrap" mb="s24">
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
        <ImageGallery images={itemData.galleryImages} />
        <Flex flexDirection="column" gap="s12" mt="s24">
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
          <Body dangerouslySetInnerHTML={{ __html: itemData.body }} />
        </Flex>
      </Content>
    </StyledProjectPage>
  );
};
