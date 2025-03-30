;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { SchemaRetrieveQueryResponse, SchemaRetrieveQueryParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const schemaRetrieveQueryKey = (params?: SchemaRetrieveQueryParams) => [{ url: '/api/schema/' }, ...(params ? [params] : [])] as const

export type SchemaRetrieveQueryKey = ReturnType<typeof schemaRetrieveQueryKey>

/**
 * @description OpenApi3 schema for this API. Format can be selected via content negotiation.- YAML: application/vnd.oai.openapi- JSON: application/vnd.oai.openapi+json
 * {@link /api/schema/}
 */
export async function schemaRetrieve(params?: SchemaRetrieveQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<SchemaRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/schema/`,
    baseURL: 'http://localhost:8000',
    params,
    ...requestConfig,
  })
  return res.data
}

export function schemaRetrieveQueryOptions(params?: SchemaRetrieveQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = schemaRetrieveQueryKey(params)
  return queryOptions<SchemaRetrieveQueryResponse, ResponseErrorConfig<Error>, SchemaRetrieveQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return schemaRetrieve(params, config)
    },
  })
}

/**
 * @description OpenApi3 schema for this API. Format can be selected via content negotiation.- YAML: application/vnd.oai.openapi- JSON: application/vnd.oai.openapi+json
 * {@link /api/schema/}
 */
export function useSchemaRetrieve<
  TData = SchemaRetrieveQueryResponse,
  TQueryData = SchemaRetrieveQueryResponse,
  TQueryKey extends QueryKey = SchemaRetrieveQueryKey,
>(
  params?: SchemaRetrieveQueryParams,
  options: {
    query?: Partial<QueryObserverOptions<SchemaRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? schemaRetrieveQueryKey(params)

  const query = useQuery({
    ...(schemaRetrieveQueryOptions(params, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}