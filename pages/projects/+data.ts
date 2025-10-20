// /pages/movies/@id/+data.ts
// Environment: server

import type { PageContextServer } from 'vike/types';
import { graphql } from '../../datocms/graphql';
import { ProjectItemFragment } from '../../components/projects/ProjectListItem';
import { executeQuery } from '../../datocms/executeQuery';

const query = graphql(
  `
    query ProjectQuery($locale: SiteLocale!, $slug: String!) {
      projectSection(locale: $locale) {
        activeTitle
      }
      allProjects(locale: $locale, filter: { slug: { eq: $slug } }) {
        ...ProjectItemFragment
      }
    }
  `,
  [ProjectItemFragment]
);

export const data = async (pageContext: PageContextServer) => {
  const { routeParams } = pageContext;

  return executeQuery(query, {
    variables: { locale: pageContext.locale, slug: routeParams.slug },
  });
};

export type Data = Awaited<ReturnType<typeof data>>;
