import { graphql } from './graphql';


export const ContactFragment = graphql(`
  fragment ContactFragment on ContactRecord @_unmask {
    title
    links {
      title
      url
      icon
      target
    }
  }
`);
