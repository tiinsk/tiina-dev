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


export const data = async () => {
  return executeQuery(query, {
    variables: { locale: 'en' },
  });
};

export type Data = Awaited<ReturnType<typeof data>>;
