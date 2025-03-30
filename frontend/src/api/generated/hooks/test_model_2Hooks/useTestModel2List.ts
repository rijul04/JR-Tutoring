;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModel2ListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const testModel2ListQueryKey = () => [{ url: '/api/test_model_2/' }] as const

export type TestModel2ListQueryKey = ReturnType<typeof testModel2ListQueryKey>

/**
 * {@link /api/test_model_2/}
 */
export async function testModel2List(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModel2ListQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/test_model_2/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function testModel2ListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = testModel2ListQueryKey()
  return queryOptions<TestModel2ListQueryResponse, ResponseErrorConfig<Error>, TestModel2ListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return testModel2List(config)
    },
  })
}

/**
 * {@link /api/test_model_2/}
 */
export function useTestModel2List<
  TData = TestModel2ListQueryResponse,
  TQueryData = TestModel2ListQueryResponse,
  TQueryKey extends QueryKey = TestModel2ListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<TestModel2ListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? testModel2ListQueryKey()

  const query = useQuery({
    ...(testModel2ListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}