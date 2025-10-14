import { graphql } from '../../datocms/graphql';
import { FragmentOf, readFragment } from 'gql.tada';
import styled from 'styled-components';

import { Flex } from '../common/Flex';
import { Body, H3, Small } from '../common/typography';
import { Tag, TagVariant } from '../common/Tag';
import { useProjectContext } from '../../contexts/project-context';
import { useEffect, useRef } from 'react';
import { Button, ButtonIconType } from '../common/Button';
import { LinkButton } from '../common/LinkButton';

interface ProjectItemProps {
  data: FragmentOf<typeof ProjectItemFragment>;
  moreButtonText: string;
  activeTitle: string;
}

export const ProjectItemFragment = graphql(`
  fragment ProjectItemFragment on ProjectRecord {
    title
    body
    activeYearList
    image {
      url
    }
    skills {
      name
      skillType
    }
    links {
      title
      icon
      url
    }
  }
`);

const getTagVariant = (skillType: string): TagVariant => {
  if (['tech', 'core', 'design'].includes(skillType))
    return skillType as TagVariant;
  return 'tech';
};

const StyledProjectItem = styled.li`
  min-height: 80vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const MobileImg = styled.img`
  position: relative;
  width: calc(100% + ${({ theme }) => theme.spacings.s48});
  left: -${({ theme }) => theme.spacings.s24};

  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;

const TextContent = styled(Flex)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s16};
  padding: ${({ theme }) => theme.spacings.s32} 0;
`;

export const ProjectListItem = ({
  data,
  moreButtonText,
  activeTitle,
}: ProjectItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const itemData = readFragment(ProjectItemFragment, data);

  const { addProject } = useProjectContext();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const totalHeight = Math.max(1, rect.height);
    addProject(itemData.title, {
      name: itemData.title,
      image: itemData.image.url,
      initialY1: rect.top,
      height: totalHeight,
    });
  }, [itemData]);

  return (
    <StyledProjectItem>
      <MobileImg src={itemData.image.url} alt={itemData.title} />
      <TextContent ref={ref}>
        <H3>{itemData.title}</H3>
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
        <Flex flexDirection="row" gap="s16" justifyContent="space-between">
          <Flex flexDirection="row" gap="s16" flexWrap="wrap">
            {itemData.links.map(link => (
              <LinkButton
                key={link.title}
                iconLeft={(link.icon as ButtonIconType) || undefined}
                href={link.url}
                target="_blank"
              />
            ))}
          </Flex>
          <Button
            variant="secondary"
            text={moreButtonText}
            iconRight="mdiArrowTopRight"
          />
        </Flex>
      </TextContent>
    </StyledProjectItem>
  );
};
