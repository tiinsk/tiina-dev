import React from 'react';

import WorkItem from './WorkItem';
import { FragmentOf } from 'gql.tada';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';

export interface WorkHistoryProps {
  data: FragmentOf<typeof WorkItemFragment>[];
}

const WorkHistory = ({ data }: WorkHistoryProps) => {
  return (
    <div>
      {data.map((workitem, i) => {
        return <WorkItem key={i} data={workitem} />;
      })}
    </div>
  );
};

export default WorkHistory;
