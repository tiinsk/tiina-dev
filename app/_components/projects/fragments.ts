import { graphql } from '@/datocms/graphql';

export const ProjectItemFragment = graphql(`
  fragment ProjectItemFragment on ProjectRecord {
    title
    body
    activeYearList
    slug
    image {
      url
    }
    skills {
      name
      skillType
    }
    links {
      icon
      url
    }
  }
`);
