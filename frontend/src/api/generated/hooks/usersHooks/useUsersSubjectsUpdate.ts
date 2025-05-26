;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersSubjectsUpdateMutationRequest, UsersSubjectsUpdateMutationResponse, UsersSubjectsUpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersSubjectsUpdateMutationKey = () => [{ url: '/api/users/subjects/{id}/' }] as const

export type UsersSubjectsUpdateMutationKey = ReturnType<typeof usersSubjectsUpdateMutationKey>

/**
 * {@link /api/users/subjects/:id/}
 */
export async function usersSubjectsUpdate(
  { id }: { id: UsersSubjectsUpdatePathParams['id'] },
  data: UsersSubjectsUpdateMutationRequest,
  config: Partial<RequestConfig<UsersSubjectsUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersSubjectsUpdateMutationResponse, ResponseErrorConfig<Error>, UsersSubjectsUpdateMutationRequest>({
    method: 'PUT',
    url: `/api/users/subjects/${id}/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/subjects/:id/}
 */
export function useUsersSubjectsUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UsersSubjectsUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { id: UsersSubjectsUpdatePathParams['id']; data: UsersSubjectsUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<UsersSubjectsUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersSubjectsUpdateMutationKey()

  return useMutation<
    UsersSubjectsUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { id: UsersSubjectsUpdatePathParams['id']; data: UsersSubjectsUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ id, data }) => {
      return usersSubjectsUpdate({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}