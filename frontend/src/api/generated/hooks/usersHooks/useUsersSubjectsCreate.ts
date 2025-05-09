;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersSubjectsCreateMutationRequest, UsersSubjectsCreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersSubjectsCreateMutationKey = () => [{ url: '/api/users/subjects/' }] as const

export type UsersSubjectsCreateMutationKey = ReturnType<typeof usersSubjectsCreateMutationKey>

/**
 * {@link /api/users/subjects/}
 */
export async function usersSubjectsCreate(
  data: UsersSubjectsCreateMutationRequest,
  config: Partial<RequestConfig<UsersSubjectsCreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersSubjectsCreateMutationResponse, ResponseErrorConfig<Error>, UsersSubjectsCreateMutationRequest>({
    method: 'POST',
    url: `/api/users/subjects/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/subjects/}
 */
export function useUsersSubjectsCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<UsersSubjectsCreateMutationResponse, ResponseErrorConfig<Error>, { data: UsersSubjectsCreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<UsersSubjectsCreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersSubjectsCreateMutationKey()

  return useMutation<UsersSubjectsCreateMutationResponse, ResponseErrorConfig<Error>, { data: UsersSubjectsCreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return usersSubjectsCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}