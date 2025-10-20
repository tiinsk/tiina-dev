// /pages/movie/+onBeforePrerenderStart.ts
// Environment: build-time

import { graphql } from '../../datocms/graphql';
import { executeQuery } from '../../datocms/executeQuery';
import { defaultLocale, locales } from '../../locales';

const query = graphql(`
  query ProjectListQuery {
    allProjects {
      id
      en: slug(locale: en)
      fi: slug(locale: fi)
    }
  }
`);

type Return = {
  url: string;
}[];

export const onBeforePrerenderStart = async (): Promise<Return> => {
  const data = await executeQuery(query);

  const urlsWithPageContext: Return = [];
  data.allProjects.forEach(project => {
    locales.forEach(locale => {
      urlsWithPageContext.push({
        url: `${locale !== defaultLocale ? `/${locale}` : ''}/projects/${project[locale]}`,
      });
    });
  });

  return urlsWithPageContext;
};
