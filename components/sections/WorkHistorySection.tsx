import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';

export const WorkHistoryFragment = graphql(`
  fragment WorkHistoryFragment on WorkHistorySectionRecord {
    title
    backgroundColor {
      hex
    }
  }
`);

export const WorkHistorySection = ({
  data,
}: {
  data: FragmentOf<typeof WorkHistoryFragment> | null;
}) => {
  const workHistoryData = readFragment(WorkHistoryFragment, data);

  if (!workHistoryData) {
    return null;
  }

  return (
    <Section bgColor={workHistoryData.backgroundColor?.hex}>
      <H2>{workHistoryData.title}</H2>
    </Section>
  );
};
