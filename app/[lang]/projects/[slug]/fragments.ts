import { graphql } from '@/datocms/graphql';
import { ResponsiveImageFragment } from '@/app/_components/common/image-fragments';

export const ProjectPageFragment = graphql(
  `
    fragment ProjectPageFragment on ProjectRecord {
      title
      body
      activeYearList
      slug
      skills {
        name
        skillType
      }
      links {
        icon
        url
      }
      galleryImages {
        responsiveImage {
          ...ResponsiveImageFragment
        }
      }
    }
  `,
  [ResponsiveImageFragment]
);
