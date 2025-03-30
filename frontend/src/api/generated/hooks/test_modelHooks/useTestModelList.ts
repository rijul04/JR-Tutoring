;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModelListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const testModelListQueryKey = () => [{ url: '/api/test_model/' }] as const

export type TestModelListQueryKey = ReturnType<typeof testModelListQueryKey>

/**
 * {@link /api/test_model/}
 */
export async function testModelList(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModelListQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/api/test_model/`, ...requestConfig })
  return res.data
}

export function testModelListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = testModelListQueryKey()
  return queryOptions<TestModelListQueryResponse, ResponseErrorConfig<Error>, TestModelListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return testModelList(config)
    },
  })
}

/**
 * {@link /api/test_model/}
 */
export function useTestModelList<
  TData = TestModelListQueryResponse,
  TQueryData = TestModelListQueryResponse,
  TQueryKey extends QueryKey = TestModelListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<TestModelListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? testModelListQueryKey()

  const query = useQuery({
    ...(testModelListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}