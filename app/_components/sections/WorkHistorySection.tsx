'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import { WorkList } from '../work-history/WorkList';
import { WorkHistoryFragment } from '@/app/_components/sections/fragments';

export const WorkHistorySection = ({
  data,
  order,
}: {
  data: FragmentOf<typeof WorkHistoryFragment> | null;
  order: number;
}) => {
  const workHistoryData = readFragment(WorkHistoryFragment, data);

  if (!workHistoryData) {
    return null;
  }

  return (
    <Section name="Work history" bgColor="workHistory" order={order}>
      <H2>{workHistoryData.title}</H2>
      <WorkList data={workHistoryData.workHistoryList} />
    </Section>
  );
};
