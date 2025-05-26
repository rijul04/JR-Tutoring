;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsRetrieveQueryResponse, UsersTutorsRetrievePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersTutorsRetrieveQueryKey = ({ user }: { user: UsersTutorsRetrievePathParams['user'] }) =>
  [{ url: '/api/users/tutors/:user/', params: { user: user } }] as const

export type UsersTutorsRetrieveQueryKey = ReturnType<typeof usersTutorsRetrieveQueryKey>

/**
 * {@link /api/users/tutors/:user/}
 */
export async function usersTutorsRetrieve(
  { user }: { user: UsersTutorsRetrievePathParams['user'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/tutors/${user}/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    ...requestConfig,
  })
  return res.data
}

export function usersTutorsRetrieveQueryOptions(
  { user }: { user: UsersTutorsRetrievePathParams['user'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = usersTutorsRetrieveQueryKey({ user })
  return queryOptions<UsersTutorsRetrieveQueryResponse, ResponseErrorConfig<Error>, UsersTutorsRetrieveQueryResponse, typeof queryKey>({
    enabled: !!user,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersTutorsRetrieve({ user }, config)
    },
  })
}

/**
 * {@link /api/users/tutors/:user/}
 */
export function useUsersTutorsRetrieve<
  TData = UsersTutorsRetrieveQueryResponse,
  TQueryData = UsersTutorsRetrieveQueryResponse,
  TQueryKey extends QueryKey = UsersTutorsRetrieveQueryKey,
>(
  { user }: { user: UsersTutorsRetrievePathParams['user'] },
  options: {
    query?: Partial<QueryObserverOptions<UsersTutorsRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersTutorsRetrieveQueryKey({ user })

  const query = useQuery({
    ...(usersTutorsRetrieveQueryOptions({ user }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}