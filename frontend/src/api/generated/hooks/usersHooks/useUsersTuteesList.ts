;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTuteesListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersTuteesListQueryKey = () => [{ url: '/api/users/tutees/' }] as const

export type UsersTuteesListQueryKey = ReturnType<typeof usersTuteesListQueryKey>

/**
 * {@link /api/users/tutees/}
 */
export async function usersTuteesList(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTuteesListQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/tutees/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersTuteesListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = usersTuteesListQueryKey()
  return queryOptions<UsersTuteesListQueryResponse, ResponseErrorConfig<Error>, UsersTuteesListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersTuteesList(config)
    },
  })
}

/**
 * {@link /api/users/tutees/}
 */
export function useUsersTuteesList<
  TData = UsersTuteesListQueryResponse,
  TQueryData = UsersTuteesListQueryResponse,
  TQueryKey extends QueryKey = UsersTuteesListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<UsersTuteesListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersTuteesListQueryKey()

  const query = useQuery({
    ...(usersTuteesListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}