;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsSummaryListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersTutorsSummaryListQueryKey = () => [{ url: '/api/users/tutors/summary/' }] as const

export type UsersTutorsSummaryListQueryKey = ReturnType<typeof usersTutorsSummaryListQueryKey>

/**
 * {@link /api/users/tutors/summary/}
 */
export async function usersTutorsSummaryList(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsSummaryListQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/tutors/summary/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    ...requestConfig,
  })
  return res.data
}

export function usersTutorsSummaryListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = usersTutorsSummaryListQueryKey()
  return queryOptions<UsersTutorsSummaryListQueryResponse, ResponseErrorConfig<Error>, UsersTutorsSummaryListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersTutorsSummaryList(config)
    },
  })
}

/**
 * {@link /api/users/tutors/summary/}
 */
export function useUsersTutorsSummaryList<
  TData = UsersTutorsSummaryListQueryResponse,
  TQueryData = UsersTutorsSummaryListQueryResponse,
  TQueryKey extends QueryKey = UsersTutorsSummaryListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<UsersTutorsSummaryListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersTutorsSummaryListQueryKey()

  const query = useQuery({
    ...(usersTutorsSummaryListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}