import { executeQuery as libExecuteQuery } from '@datocms/cda-client';
import type { TadaDocumentNode } from 'gql.tada';

type ExecuteQueryOptions<Variables> = {
  variables?: Variables;
  includeDrafts?: boolean;
};

export async function executeQuery<Result, Variables>(
  query: TadaDocumentNode<Result, Variables>,
  options?: ExecuteQueryOptions<Variables>
) {
  return libExecuteQuery(query, {
    variables: options?.variables,
    excludeInvalid: true,
    includeDrafts: process.env.DATOCMS_SHOW_DRAFT_CONTENT === 'true',
    token:
      process.env.DATOCMS_SHOW_DRAFT_CONTENT === 'true'
        ? process.env.DATOCMS_DRAFT_CONTENT_CDA_TOKEN!
        : process.env.DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN!,
  });
}
