import { graphql } from '@/datocms/graphql';

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
