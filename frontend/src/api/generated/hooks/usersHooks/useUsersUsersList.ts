;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersUsersListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersUsersListQueryKey = () => [{ url: '/api/users/users/' }] as const

export type UsersUsersListQueryKey = ReturnType<typeof usersUsersListQueryKey>

/**
 * {@link /api/users/users/}
 */
export async function usersUsersList(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersUsersListQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/users/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersUsersListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = usersUsersListQueryKey()
  return queryOptions<UsersUsersListQueryResponse, ResponseErrorConfig<Error>, UsersUsersListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersUsersList(config)
    },
  })
}

/**
 * {@link /api/users/users/}
 */
export function useUsersUsersList<
  TData = UsersUsersListQueryResponse,
  TQueryData = UsersUsersListQueryResponse,
  TQueryKey extends QueryKey = UsersUsersListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<UsersUsersListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersUsersListQueryKey()

  const query = useQuery({
    ...(usersUsersListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}