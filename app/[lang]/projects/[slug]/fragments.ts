import { graphql } from '@/datocms/graphql';
import type { FragmentOf, ResultOf } from 'gql.tada';
import { ResponsiveImageFragment } from '@/app/_components/common/image-fragments';

export type BodyImageBlock = {
  image: { responsiveImage: FragmentOf<typeof ResponsiveImageFragment> };
};

export type BodySideBySideImageBlock = {
  imageLeft: { responsiveImage: FragmentOf<typeof ResponsiveImageFragment> };
  imageRight: { responsiveImage: FragmentOf<typeof ResponsiveImageFragment> };
};

export type BodyTextBlock = {
  text: string;
};

export type BodyBlock =
  | BodyImageBlock
  | BodyTextBlock
  | BodySideBySideImageBlock;

/**
 * Result type for ProjectPageFragment with `body` properly typed.
 * gql.tada infers union fields as `unknown`, so we overlay the correct type here.
 */
export type ProjectPageData = Omit<
  ResultOf<typeof ProjectPageFragment>,
  'body'
> & {
  body: readonly BodyBlock[];
};

export const ProjectPageFragment = graphql(
  `
    fragment ProjectPageFragment on ProjectRecord {
      title
      shortDescription
      activeYearList
      slug
      body {
        ... on BodySideBySideImageRecord {
          imageLeft {
            responsiveImage {
              ...ResponsiveImageFragment
            }
          }
          imageRight {
            responsiveImage {
              ...ResponsiveImageFragment
            }
          }
        }
        ... on BodyImageRecord {
          image {
            responsiveImage {
              ...ResponsiveImageFragment
            }
          }
        }
        ... on BodyTextRecord {
          text
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
      galleryImages {
        responsiveImage {
          ...ResponsiveImageFragment
        }
      }
    }
  `,
  [ResponsiveImageFragment]
);
