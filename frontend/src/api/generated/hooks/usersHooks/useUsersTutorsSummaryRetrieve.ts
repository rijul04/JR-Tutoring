;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsSummaryRetrieveQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersTutorsSummaryRetrieveQueryKey = () => [{ url: '/api/users/tutors/summary/' }] as const

export type UsersTutorsSummaryRetrieveQueryKey = ReturnType<typeof usersTutorsSummaryRetrieveQueryKey>

/**
 * {@link /api/users/tutors/summary/}
 */
export async function usersTutorsSummaryRetrieve(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsSummaryRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/tutors/summary/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersTutorsSummaryRetrieveQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = usersTutorsSummaryRetrieveQueryKey()
  return queryOptions<UsersTutorsSummaryRetrieveQueryResponse, ResponseErrorConfig<Error>, UsersTutorsSummaryRetrieveQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersTutorsSummaryRetrieve(config)
    },
  })
}

/**
 * {@link /api/users/tutors/summary/}
 */
export function useUsersTutorsSummaryRetrieve<
  TData = UsersTutorsSummaryRetrieveQueryResponse,
  TQueryData = UsersTutorsSummaryRetrieveQueryResponse,
  TQueryKey extends QueryKey = UsersTutorsSummaryRetrieveQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<UsersTutorsSummaryRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersTutorsSummaryRetrieveQueryKey()

  const query = useQuery({
    ...(usersTutorsSummaryRetrieveQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}