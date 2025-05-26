;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTuteesRetrieveQueryResponse, UsersTuteesRetrievePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersTuteesRetrieveQueryKey = ({ user }: { user: UsersTuteesRetrievePathParams['user'] }) =>
  [{ url: '/api/users/tutees/:user/', params: { user: user } }] as const

export type UsersTuteesRetrieveQueryKey = ReturnType<typeof usersTuteesRetrieveQueryKey>

/**
 * {@link /api/users/tutees/:user/}
 */
export async function usersTuteesRetrieve(
  { user }: { user: UsersTuteesRetrievePathParams['user'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTuteesRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/tutees/${user}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersTuteesRetrieveQueryOptions(
  { user }: { user: UsersTuteesRetrievePathParams['user'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = usersTuteesRetrieveQueryKey({ user })
  return queryOptions<UsersTuteesRetrieveQueryResponse, ResponseErrorConfig<Error>, UsersTuteesRetrieveQueryResponse, typeof queryKey>({
    enabled: !!user,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersTuteesRetrieve({ user }, config)
    },
  })
}

/**
 * {@link /api/users/tutees/:user/}
 */
export function useUsersTuteesRetrieve<
  TData = UsersTuteesRetrieveQueryResponse,
  TQueryData = UsersTuteesRetrieveQueryResponse,
  TQueryKey extends QueryKey = UsersTuteesRetrieveQueryKey,
>(
  { user }: { user: UsersTuteesRetrievePathParams['user'] },
  options: {
    query?: Partial<QueryObserverOptions<UsersTuteesRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersTuteesRetrieveQueryKey({ user })

  const query = useQuery({
    ...(usersTuteesRetrieveQueryOptions({ user }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}