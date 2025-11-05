import React from 'react';

import WorkItem from './WorkItem';
import { FragmentOf } from 'gql.tada';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';
import { Box } from '../common/Box';

export interface WorkHistoryProps {
  data: FragmentOf<typeof WorkItemFragment>[];
}

const WorkHistory = ({ data }: WorkHistoryProps) => {
  return (
    <Box mt="s24">
      {data.map((workitem, i) => {
        return <WorkItem key={i} data={workitem} />;
      })}
    </Box>
  );
};

export default WorkHistory;
