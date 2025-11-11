import { graphql } from '@/datocms/graphql';

export const ResponsiveImageFragment = graphql(`
  fragment ResponsiveImageFragment on ResponsiveImage {
    src
    alt
    title
    base64
  }
`);

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
