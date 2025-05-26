;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type {
  UsersTutorsPartialUpdateMutationRequest,
  UsersTutorsPartialUpdateMutationResponse,
  UsersTutorsPartialUpdatePathParams,
} from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTutorsPartialUpdateMutationKey = () => [{ url: '/api/users/tutors/{user}/' }] as const

export type UsersTutorsPartialUpdateMutationKey = ReturnType<typeof usersTutorsPartialUpdateMutationKey>

/**
 * {@link /api/users/tutors/:user/}
 */
export async function usersTutorsPartialUpdate(
  { user }: { user: UsersTutorsPartialUpdatePathParams['user'] },
  data?: UsersTutorsPartialUpdateMutationRequest,
  config: Partial<RequestConfig<UsersTutorsPartialUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsPartialUpdateMutationResponse, ResponseErrorConfig<Error>, UsersTutorsPartialUpdateMutationRequest>({
    method: 'PATCH',
    url: `/api/users/tutors/${user}/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutors/:user/}
 */
export function useUsersTutorsPartialUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UsersTutorsPartialUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { user: UsersTutorsPartialUpdatePathParams['user']; data?: UsersTutorsPartialUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<UsersTutorsPartialUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTutorsPartialUpdateMutationKey()

  return useMutation<
    UsersTutorsPartialUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { user: UsersTutorsPartialUpdatePathParams['user']; data?: UsersTutorsPartialUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ user, data }) => {
      return usersTutorsPartialUpdate({ user }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}