import { PageContextServer } from 'vike/types';

import { graphql } from '../../datocms/graphql';
import { ContactFragment } from '../../datocms/fragments';
import { executeQuery } from '../../datocms/executeQuery';

const query = graphql(`
  query DatoCMSQuery($locale: SiteLocale!) {
    contacts: contact(locale: $locale) {
      ...ContactFragment
    }
  }
`, [ContactFragment]);


export const data = async (pageContext: PageContextServer) => {
  return executeQuery(query, {
    variables: { locale: pageContext.locale },
  });
};

export type Data = Awaited<ReturnType<typeof data>>;
