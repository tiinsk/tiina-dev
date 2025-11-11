'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import styled, { useTheme } from 'styled-components';
import Image from 'next/image';

import { Flex } from '../common/Flex';
import { Body, H4, Small } from '../common/typography';
import { Tag, TagVariant } from '../common/Tag';
import { useProjectContext } from '@/app/_contexts/project-context';
import { useEffect, useRef } from 'react';
import { ButtonIconType } from '../common/Button';
import { LinkButton } from '../common/LinkButton';
import { ProjectItemFragment } from '@/app/_components/projects/fragments';
import { Locale } from '@/locales';
import { useParams } from 'next/navigation';
import { ResponsiveImageFragment } from '@/app/_components/common/image-fragments';

interface ProjectItemProps {
  data: FragmentOf<typeof ProjectItemFragment>;
  moreButtonText: string;
  activeTitle: string;
}

export const getTagVariant = (skillType: string): TagVariant => {
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

const MobileImgContainer = styled.div`
  position: relative;

  width: 100vw;
  height: auto;
  aspect-ratio: 1/1;
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
  const { lang } = useParams();
  const ref = useRef<HTMLDivElement | null>(null);
  const { breakpoints } = useTheme();

  const itemData = readFragment(ProjectItemFragment, data);
  const imageData = readFragment(
    ResponsiveImageFragment,
    itemData.image.responsiveImage
  );

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
      image: imageData?.src || '',
      initialY1: rect.top,
      height: totalHeight,
    });
  }, [itemData]);

  return (
    <StyledProjectItem>
      <MobileImgContainer>
        <Image
          src={imageData?.src || ''}
          alt={itemData.title}
          fill={true}
          sizes={`(max-width: ${breakpoints.sm}px) 100vw, 0px`}
        />
      </MobileImgContainer>
      <TextContent ref={ref}>
        <H4>{itemData.title}</H4>
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
          <Flex flexDirection="row" gap="s8" flexWrap="wrap">
            {itemData.links.map(link => (
              <LinkButton
                key={link.icon}
                iconLeft={(link.icon as ButtonIconType) || undefined}
                href={link.url}
                isExternal={true}
                target="_blank"
              />
            ))}
          </Flex>
          <LinkButton
            variant="secondary"
            text={moreButtonText}
            iconRight="mdiArrowRight"
            href={`/projects/${itemData.slug}`}
            locale={lang as Locale}
          />
        </Flex>
      </TextContent>
    </StyledProjectItem>
  );
};
