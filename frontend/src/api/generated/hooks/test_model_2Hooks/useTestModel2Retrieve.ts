;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModel2RetrieveQueryResponse, TestModel2RetrievePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const testModel2RetrieveQueryKey = ({ id }: { id: TestModel2RetrievePathParams['id'] }) =>
  [{ url: '/api/test_model_2/:id/', params: { id: id } }] as const

export type TestModel2RetrieveQueryKey = ReturnType<typeof testModel2RetrieveQueryKey>

/**
 * {@link /api/test_model_2/:id/}
 */
export async function testModel2Retrieve({ id }: { id: TestModel2RetrievePathParams['id'] }, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModel2RetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/test_model_2/${id}/`,
    ...requestConfig,
  })
  return res.data
}

export function testModel2RetrieveQueryOptions(
  { id }: { id: TestModel2RetrievePathParams['id'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = testModel2RetrieveQueryKey({ id })
  return queryOptions<TestModel2RetrieveQueryResponse, ResponseErrorConfig<Error>, TestModel2RetrieveQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return testModel2Retrieve({ id }, config)
    },
  })
}

/**
 * {@link /api/test_model_2/:id/}
 */
export function useTestModel2Retrieve<
  TData = TestModel2RetrieveQueryResponse,
  TQueryData = TestModel2RetrieveQueryResponse,
  TQueryKey extends QueryKey = TestModel2RetrieveQueryKey,
>(
  { id }: { id: TestModel2RetrievePathParams['id'] },
  options: {
    query?: Partial<QueryObserverOptions<TestModel2RetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? testModel2RetrieveQueryKey({ id })

  const query = useQuery({
    ...(testModel2RetrieveQueryOptions({ id }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}