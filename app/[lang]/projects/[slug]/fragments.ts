import { graphql } from '@/datocms/graphql';

export const ProjectPageFragment = graphql(
  `
    fragment ProjectPageFragment on ProjectRecord {
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
      galleryImages {
        blurhash
        thumbnail: responsiveImage(imgixParams: { fm: jpg, w: 200 }) {
          src
        }
        original: responsiveImage(imgixParams: { fm: jpg, w: 1400 }) {
          src
        }
      }
    }
  `,);
