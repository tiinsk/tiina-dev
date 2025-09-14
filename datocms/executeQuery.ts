import { buildRequestInit, executeQuery as libExecuteQuery } from '@datocms/cda-client';
import type { TadaDocumentNode } from 'gql.tada';

type ExecuteQueryOptions<Variables> = {
  variables?: Variables;
  includeDrafts?: boolean;
};

export async function executeQuery<Result, Variables>(
  query: TadaDocumentNode<Result, Variables>,
  options?: ExecuteQueryOptions<Variables>,
) {
  buildRequestInit;
  return libExecuteQuery(query, {
    variables: options?.variables,
    excludeInvalid: true,
    includeDrafts: import.meta.env.DATOCMS_SHOW_DRAFT_CONTENT === 'true',
    token: import.meta.env.DATOCMS_SHOW_DRAFT_CONTENT === 'true'
      ? import.meta.env.DATOCMS_DRAFT_CONTENT_CDA_TOKEN!
      : import.meta.env.DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN!,
  });
}
