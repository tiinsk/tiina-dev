import { graphql } from '../../datocms/graphql';
import { FragmentOf, readFragment } from 'gql.tada';
import { Flex } from '../common/Flex';
import { Body, H4, Label, SmallBold } from '../common/typography';
import { Tag, TagVariant } from '../common/Tag';
import styled from 'styled-components';
import { Road, RoadVariant } from '../../assets/images/roads/Road';
import { getFormattedDateMMMYYYY } from '../../utils/date';
import { usePageContext } from 'vike-react/usePageContext';

interface WorkItemProps {
  data: FragmentOf<typeof WorkItemFragment>;
  isFirst?: boolean;
  isLast?: boolean;
}

export const WorkItemFragment = graphql(`
  fragment WorkItemFragment on WorkHistoryRecord {
    company
    title
    startDate
    endDate
    body
    roadIcon
    skills {
      name
      skillType
    }
  }
`);

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

export const WorkListItem = ({ data, isFirst, isLast }: WorkItemProps) => {
  const itemData = readFragment(WorkItemFragment, data);
  const { locale } = usePageContext();
  return (
    <li>
      <Flex flexDirection="row">
        <div>
          <Road
            variant={itemData.roadIcon as RoadVariant}
            isFirst={isFirst}
            isLast={isLast}
          />
        </div>
        <TextContent>
          <Flex flexDirection="column" gap="s2">
            <Label>
              {`${getFormattedDateMMMYYYY(itemData.startDate, locale)} - ${
                itemData.endDate
                  ? getFormattedDateMMMYYYY(itemData.endDate, locale)
                  : ''
              }`}
            </Label>
            <H4>{itemData.title}</H4>
            <SmallBold>{itemData.company}</SmallBold>
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
