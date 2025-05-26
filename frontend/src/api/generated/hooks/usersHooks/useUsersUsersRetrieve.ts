;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersUsersRetrieveQueryResponse, UsersUsersRetrievePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersUsersRetrieveQueryKey = ({ id }: { id: UsersUsersRetrievePathParams['id'] }) =>
  [{ url: '/api/users/users/:id/', params: { id: id } }] as const

export type UsersUsersRetrieveQueryKey = ReturnType<typeof usersUsersRetrieveQueryKey>

/**
 * {@link /api/users/users/:id/}
 */
export async function usersUsersRetrieve({ id }: { id: UsersUsersRetrievePathParams['id'] }, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersUsersRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/users/${id}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersUsersRetrieveQueryOptions(
  { id }: { id: UsersUsersRetrievePathParams['id'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = usersUsersRetrieveQueryKey({ id })
  return queryOptions<UsersUsersRetrieveQueryResponse, ResponseErrorConfig<Error>, UsersUsersRetrieveQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersUsersRetrieve({ id }, config)
    },
  })
}

/**
 * {@link /api/users/users/:id/}
 */
export function useUsersUsersRetrieve<
  TData = UsersUsersRetrieveQueryResponse,
  TQueryData = UsersUsersRetrieveQueryResponse,
  TQueryKey extends QueryKey = UsersUsersRetrieveQueryKey,
>(
  { id }: { id: UsersUsersRetrievePathParams['id'] },
  options: {
    query?: Partial<QueryObserverOptions<UsersUsersRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersUsersRetrieveQueryKey({ id })

  const query = useQuery({
    ...(usersUsersRetrieveQueryOptions({ id }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}