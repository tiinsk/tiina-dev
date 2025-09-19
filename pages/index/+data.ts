import { PageContextServer } from 'vike/types';

import { graphql } from '../../datocms/graphql';
import { ContactFragment } from '../../datocms/fragments';
import { executeQuery } from '../../datocms/executeQuery';
import { HeaderFragment } from '../../components/sections/HeaderSection';

const query = graphql(
  `
    query DatoCMSQuery($locale: SiteLocale!) {
      header: headerSection(locale: $locale) {
        ...HeaderFragment
      }
      contacts: contact(locale: $locale) {
        ...ContactFragment
      }
    }
  `,
  [ContactFragment, HeaderFragment]
);

export const data = async (pageContext: PageContextServer) => {
  return executeQuery(query, {
    variables: { locale: pageContext.locale },
  });
};

export type Data = Awaited<ReturnType<typeof data>>;
