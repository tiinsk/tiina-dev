import React from 'react';
import { DashedLine } from './DashedLine';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';
import { getFormattedDateMMYYYY } from '@/utils/date';

export interface WorkItemProps {
  data: FragmentOf<typeof WorkItemFragment>;
}

const StyledConsoleWorkItem = styled.div`
  .dates {
    margin: 0.5rem 0;
  }
  .company {
    text-transform: uppercase;
    color: white;
  }
  .work-title {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.console.magenta};
  }
  .work-description {
    color: ${({ theme }) => theme.colors.console.grey};
  }
`;

const WorkItem = ({ data }: WorkItemProps) => {
  const itemData = readFragment(WorkItemFragment, data);
  return (
    <StyledConsoleWorkItem>
      <DashedLine />
      <div className="dates">
        <span>{getFormattedDateMMYYYY(itemData.startDate)} - </span>
        {itemData.endDate ? <span>{getFormattedDateMMYYYY(itemData.endDate)}</span> : null}
      </div>
      <div className="company">{itemData.company}</div>
      <div className="work-title">{itemData.title}</div>
      <div className="work-description">
        {itemData.body}
        <div className="rateless-skills">
          {itemData.skills
            ? itemData.skills.map((skill, i) => {
                return (
                  <div key={i} className="rateless-skill">
                    <span className="line">/</span>
                    {skill.name}
                    <span className="line">/</span>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </StyledConsoleWorkItem>
  );
};

export default WorkItem;
