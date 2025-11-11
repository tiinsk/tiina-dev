import { graphql } from '@/datocms/graphql';
import { ResponsiveImageFragment } from '@/app/_components/common/image-fragments';

export const ProjectItemFragment = graphql(
  `
    fragment ProjectItemFragment on ProjectRecord {
      title
      body
      activeYearList
      slug
      image {
        responsiveImage {
          ...ResponsiveImageFragment
        }
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
  `,
  [ResponsiveImageFragment]
);
