;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModelRetrieveQueryResponse, TestModelRetrievePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const testModelRetrieveQueryKey = ({ id }: { id: TestModelRetrievePathParams['id'] }) => [{ url: '/api/test_model/:id/', params: { id: id } }] as const

export type TestModelRetrieveQueryKey = ReturnType<typeof testModelRetrieveQueryKey>

/**
 * {@link /api/test_model/:id/}
 */
export async function testModelRetrieve({ id }: { id: TestModelRetrievePathParams['id'] }, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModelRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/test_model/${id}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function testModelRetrieveQueryOptions(
  { id }: { id: TestModelRetrievePathParams['id'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = testModelRetrieveQueryKey({ id })
  return queryOptions<TestModelRetrieveQueryResponse, ResponseErrorConfig<Error>, TestModelRetrieveQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return testModelRetrieve({ id }, config)
    },
  })
}

/**
 * {@link /api/test_model/:id/}
 */
export function useTestModelRetrieve<
  TData = TestModelRetrieveQueryResponse,
  TQueryData = TestModelRetrieveQueryResponse,
  TQueryKey extends QueryKey = TestModelRetrieveQueryKey,
>(
  { id }: { id: TestModelRetrievePathParams['id'] },
  options: {
    query?: Partial<QueryObserverOptions<TestModelRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? testModelRetrieveQueryKey({ id })

  const query = useQuery({
    ...(testModelRetrieveQueryOptions({ id }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}