;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersTutorsListQueryKey = () => [{ url: '/api/users/tutors/' }] as const

export type UsersTutorsListQueryKey = ReturnType<typeof usersTutorsListQueryKey>

/**
 * {@link /api/users/tutors/}
 */
export async function usersTutorsList(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsListQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/tutors/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    ...requestConfig,
  })
  return res.data
}

export function usersTutorsListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = usersTutorsListQueryKey()
  return queryOptions<UsersTutorsListQueryResponse, ResponseErrorConfig<Error>, UsersTutorsListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersTutorsList(config)
    },
  })
}

/**
 * {@link /api/users/tutors/}
 */
export function useUsersTutorsList<
  TData = UsersTutorsListQueryResponse,
  TQueryData = UsersTutorsListQueryResponse,
  TQueryKey extends QueryKey = UsersTutorsListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<UsersTutorsListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersTutorsListQueryKey()

  const query = useQuery({
    ...(usersTutorsListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}