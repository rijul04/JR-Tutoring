;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsUpdateMutationRequest, UsersTutorsUpdateMutationResponse, UsersTutorsUpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTutorsUpdateMutationKey = () => [{ url: '/api/users/tutors/{user}/' }] as const

export type UsersTutorsUpdateMutationKey = ReturnType<typeof usersTutorsUpdateMutationKey>

/**
 * {@link /api/users/tutors/:user/}
 */
export async function usersTutorsUpdate(
  { user }: { user: UsersTutorsUpdatePathParams['user'] },
  data: UsersTutorsUpdateMutationRequest,
  config: Partial<RequestConfig<UsersTutorsUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsUpdateMutationResponse, ResponseErrorConfig<Error>, UsersTutorsUpdateMutationRequest>({
    method: 'PUT',
    url: `/api/users/tutors/${user}/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutors/:user/}
 */
export function useUsersTutorsUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UsersTutorsUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { user: UsersTutorsUpdatePathParams['user']; data: UsersTutorsUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<UsersTutorsUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTutorsUpdateMutationKey()

  return useMutation<
    UsersTutorsUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { user: UsersTutorsUpdatePathParams['user']; data: UsersTutorsUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ user, data }) => {
      return usersTutorsUpdate({ user }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}