;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type {
  UsersSubjectsPartialUpdateMutationRequest,
  UsersSubjectsPartialUpdateMutationResponse,
  UsersSubjectsPartialUpdatePathParams,
} from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersSubjectsPartialUpdateMutationKey = () => [{ url: '/api/users/subjects/{id}/' }] as const

export type UsersSubjectsPartialUpdateMutationKey = ReturnType<typeof usersSubjectsPartialUpdateMutationKey>

/**
 * {@link /api/users/subjects/:id/}
 */
export async function usersSubjectsPartialUpdate(
  { id }: { id: UsersSubjectsPartialUpdatePathParams['id'] },
  data?: UsersSubjectsPartialUpdateMutationRequest,
  config: Partial<RequestConfig<UsersSubjectsPartialUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersSubjectsPartialUpdateMutationResponse, ResponseErrorConfig<Error>, UsersSubjectsPartialUpdateMutationRequest>({
    method: 'PATCH',
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
export function useUsersSubjectsPartialUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UsersSubjectsPartialUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { id: UsersSubjectsPartialUpdatePathParams['id']; data?: UsersSubjectsPartialUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<UsersSubjectsPartialUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersSubjectsPartialUpdateMutationKey()

  return useMutation<
    UsersSubjectsPartialUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { id: UsersSubjectsPartialUpdatePathParams['id']; data?: UsersSubjectsPartialUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ id, data }) => {
      return usersSubjectsPartialUpdate({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}