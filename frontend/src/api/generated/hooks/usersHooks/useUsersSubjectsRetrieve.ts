;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersSubjectsRetrieveQueryResponse, UsersSubjectsRetrievePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const usersSubjectsRetrieveQueryKey = ({ id }: { id: UsersSubjectsRetrievePathParams['id'] }) =>
  [{ url: '/api/users/subjects/:id/', params: { id: id } }] as const

export type UsersSubjectsRetrieveQueryKey = ReturnType<typeof usersSubjectsRetrieveQueryKey>

/**
 * {@link /api/users/subjects/:id/}
 */
export async function usersSubjectsRetrieve(
  { id }: { id: UsersSubjectsRetrievePathParams['id'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersSubjectsRetrieveQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/api/users/subjects/${id}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

export function usersSubjectsRetrieveQueryOptions(
  { id }: { id: UsersSubjectsRetrievePathParams['id'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = usersSubjectsRetrieveQueryKey({ id })
  return queryOptions<UsersSubjectsRetrieveQueryResponse, ResponseErrorConfig<Error>, UsersSubjectsRetrieveQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return usersSubjectsRetrieve({ id }, config)
    },
  })
}

/**
 * {@link /api/users/subjects/:id/}
 */
export function useUsersSubjectsRetrieve<
  TData = UsersSubjectsRetrieveQueryResponse,
  TQueryData = UsersSubjectsRetrieveQueryResponse,
  TQueryKey extends QueryKey = UsersSubjectsRetrieveQueryKey,
>(
  { id }: { id: UsersSubjectsRetrievePathParams['id'] },
  options: {
    query?: Partial<QueryObserverOptions<UsersSubjectsRetrieveQueryResponse, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? usersSubjectsRetrieveQueryKey({ id })

  const query = useQuery({
    ...(usersSubjectsRetrieveQueryOptions({ id }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}