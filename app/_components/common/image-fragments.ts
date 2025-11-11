import { graphql } from '@/datocms/graphql';

export const ResponsiveImageFragment = graphql(`
  fragment ResponsiveImageFragment on ResponsiveImage {
    src
    alt
    title
    base64
  }
`);
