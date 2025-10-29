'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import { Flex } from '../common/Flex';
import { Body, H4, Label, SmallBold } from '../common/typography';
import { Tag, TagVariant } from '../common/Tag';
import styled from 'styled-components';
import { Road, RoadVariant } from '@/app/_images/roads/Road';
import { getFormattedDateMMMYYYY } from '@/utils/date';
import { Cloud, CloudVariant } from '@/app/_images/roads/Cloud';
import { Locale } from '@/locales';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';
import { useParams } from 'next/navigation';

interface WorkItemProps {
  data: FragmentOf<typeof WorkItemFragment>;
  isFirst?: boolean;
  isLast?: boolean;
}

const getTagVariant = (skillType: string): TagVariant => {
  if (['tech', 'core', 'design'].includes(skillType))
    return skillType as TagVariant;
  return 'tech';
};

const TextContent = styled(Flex)`
  z-index: 1;

  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.s16};
  margin: ${({ theme }) => theme.spacings.s32} 0;
  min-height: ${({ theme }) => theme.spacings.s256};

  ${({ theme }) => theme.mediaQueries.md} {
    min-height: ${({ theme }) => theme.spacings.s480};
    margin-right: ${({ theme }) => theme.spacings.s80};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 0;
  }
`;

const getCloudVariant = (
  roadVariant: RoadVariant
): {
  initOffsetX: string;
  initOffsetY: string;
  variant: CloudVariant;
  direction?: 'left' | 'right';
  speedMultiplier?: number;
} => {
  switch (roadVariant) {
    case 1:
      return {
        initOffsetX: '40%',
        initOffsetY: '-15%',
        variant: 1,
        direction: 'right',
        speedMultiplier: 0.1,
      };
    case 2:
      return {
        initOffsetX: '15%',
        initOffsetY: '-15%',
        variant: 2,
      };
    case 3:
      return {
        initOffsetX: '5%',
        initOffsetY: '5%',
        variant: 3,
      };
    case 4:
      return {
        initOffsetX: '30%',
        initOffsetY: '0%',
        variant: 1,
        direction: 'right',
        speedMultiplier: 0.1,
      };
  }
};

export const WorkListItem = ({ data, isFirst, isLast }: WorkItemProps) => {
  const { lang } = useParams<{lang: Locale}>();
  const itemData = readFragment(WorkItemFragment, data);
  const cloud = getCloudVariant(itemData.roadIcon as RoadVariant);
  return (
    <li>
      <Flex flexDirection="row">
        <div style={{ position: 'relative' }}>
          <Road
            variant={itemData.roadIcon as RoadVariant}
            isFirst={isFirst}
            isLast={isLast}
          />
          <Cloud
            variant={cloud.variant}
            initOffsetX={cloud.initOffsetX}
            initOffsetY={cloud.initOffsetY}
            direction={cloud.direction}
            speedMultiplier={cloud.speedMultiplier}
          />
        </div>
        <TextContent>
          <Flex flexDirection="column" gap="s2">
            <Label>
              {`${getFormattedDateMMMYYYY(itemData.startDate, lang)} - ${
                itemData.endDate
                  ? getFormattedDateMMMYYYY(itemData.endDate, lang)
                  : ''
              }`}
            </Label>
            <H4>{itemData.company}</H4>
            <SmallBold>{itemData.title}</SmallBold>
          </Flex>
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
        </TextContent>
      </Flex>
    </li>
  );
};
