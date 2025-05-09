;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersSubjectsListQueryResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersSubjectsListQueryKey = () => [{ url: '/api/users/subjects/' }] as const

export type UsersSubjectsListQueryKey = ReturnType<typeof usersSubjectsListQueryKey>

/**
 * {@link /api/users/subjects/}
 */
export async function usersSubjectsList(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersSubjectsListQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/subjects/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersSubjectsListQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = usersSubjectsListQueryKey()
  return queryOptions<UsersSubjectsListQueryResponse, ResponseErrorConfig<Error>, UsersSubjectsListQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersSubjectsList(config)
    },
  })
}

/**
 * {@link /api/users/subjects/}
 */
export function useUsersSubjectsList<
  TData = UsersSubjectsListQueryResponse,
  TQueryData = UsersSubjectsListQueryResponse,
  TQueryKey extends QueryKey = UsersSubjectsListQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<UsersSubjectsListQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersSubjectsListQueryKey()

  const query = useQuery({
    ...(usersSubjectsListQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}