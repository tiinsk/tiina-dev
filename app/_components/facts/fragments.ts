import { graphql } from '@/datocms/graphql';

export const FactFragment = graphql(`
  fragment FactFragment on FactRecord {
    title
    body
    startDate
    endDate
    icon
    iconBackgroundVariant
    postItVariant
  }
`);
