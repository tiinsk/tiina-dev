import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import { WorkItemFragment } from '../work-history/WorkListItem';
import { WorkList } from '../work-history/WorkList';

export const WorkHistoryFragment = graphql(
  `
    fragment WorkHistoryFragment on WorkHistorySectionRecord {
      title
      backgroundColor {
        hex
      }
      workHistoryList {
        ...WorkItemFragment
      }
    }
  `,
  [WorkItemFragment]
);

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
    <Section
      name="Work history"
      bgColor={workHistoryData.backgroundColor?.hex}
      order={order}
    >
      <H2>{workHistoryData.title}</H2>
      <WorkList data={workHistoryData.workHistoryList} />
    </Section>
  );
};
