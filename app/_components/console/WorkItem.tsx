import React from 'react';
import { DashedLineX } from './DashedLine';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';
import { getFormattedDateMMYYYY } from '@/utils/date';
import { Flex } from '@/app/_components/common/Flex';
import { Skill } from '@/app/_components/console/Skill';

export interface WorkItemProps {
  data: FragmentOf<typeof WorkItemFragment>;
}

const Dates = styled.div`
  margin: ${({ theme }) => theme.spacings.s8} 0;
  margin-top: ${({ theme }) => theme.spacings.s16};
`;

const Company = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.console.white};
`;

const WorkTitle = styled.div`
  margin: ${({ theme }) => theme.spacings.s16} 0;
  color: ${({ theme }) => theme.colors.console.magenta};
`;

const WorkDescription = styled.div`
  color: ${({ theme }) => theme.colors.console.grey};
`;

const WorkItem = ({ data }: WorkItemProps) => {
  const itemData = readFragment(WorkItemFragment, data);
  return (
    <div>
      <Dates>
        <span>{getFormattedDateMMYYYY(itemData.startDate)} - </span>
        {itemData.endDate ? (
          <span>{getFormattedDateMMYYYY(itemData.endDate)}</span>
        ) : null}
      </Dates>
      <Company>{itemData.company}</Company>
      <WorkTitle>{itemData.title}</WorkTitle>
      <WorkDescription>{itemData.body}</WorkDescription>
      <Flex mt="s12" mb="s16" flexWrap="wrap">
        {itemData?.skills.map(skill => (
          <Skill text={skill.name} key={skill.name} />
        ))}
      </Flex>
      <DashedLineX />
    </div>
  );
};

export default WorkItem;
