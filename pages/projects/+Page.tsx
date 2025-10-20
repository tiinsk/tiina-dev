import { useData } from 'vike-react/useData';

import { Data } from './+data';

import { Body, H3, Small } from '../../components/common/typography';
import { readFragment } from 'gql.tada';
import {
  getTagVariant,
  ProjectItemFragment,
} from '../../components/projects/ProjectListItem';
import { LinkButton } from '../../components/common/LinkButton';
import { Button, ButtonIconType } from '../../components/common/Button';
import { Flex } from '../../components/common/Flex';
import { ImageGallery } from '../../components/common/ImageGallery';
import { ProjectDialogFragment } from '../../components/projects/ProjectDialog';
import { Tag } from '../../components/common/Tag';
import styled from 'styled-components';

const StyledProjectPage = styled.div`
  background-color: ${({ theme }) => theme.colors.background.sections.projects};
  min-height: 100vh;
`;

const StyledNav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.typography.primary};
  display: flex;
  padding: ${({ theme }) => theme.spacings.s16};
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};

  padding-left: 10vw;
  padding-right: ${({ theme }) => theme.spacings.s64};
  padding-top: ${({ theme }) => theme.spacings.s64};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 5vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spacings.s24};
    padding-right: ${({ theme }) => theme.spacings.s24};
  }
`;

export default function Page() {
  const data = useData<Data>();

  const project = data.allProjects[0];

  if (!project) {
    return null;
  }

  const itemData = readFragment(ProjectItemFragment, project);
  const dialogData = readFragment(ProjectDialogFragment, itemData);

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
              key={link.title}
              iconLeft={(link.icon as ButtonIconType) || undefined}
              href={link.url}
              target="_blank"
            />
          ))}
        </Flex>
        <ImageGallery images={dialogData.galleryImages} />
        <Flex flexDirection="column" gap="s12" mt="s24">
          {itemData.activeYearList && (
            <Small>{`${data.projectSection?.activeTitle}: ${itemData.activeYearList}`}</Small>
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
}
