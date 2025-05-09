;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTuteesUpdateMutationRequest, UsersTuteesUpdateMutationResponse, UsersTuteesUpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTuteesUpdateMutationKey = () => [{ url: '/api/users/tutees/{user}/' }] as const

export type UsersTuteesUpdateMutationKey = ReturnType<typeof usersTuteesUpdateMutationKey>

/**
 * {@link /api/users/tutees/:user/}
 */
export async function usersTuteesUpdate(
  { user }: { user: UsersTuteesUpdatePathParams['user'] },
  data: UsersTuteesUpdateMutationRequest,
  config: Partial<RequestConfig<UsersTuteesUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTuteesUpdateMutationResponse, ResponseErrorConfig<Error>, UsersTuteesUpdateMutationRequest>({
    method: 'PUT',
    url: `/api/users/tutees/${user}/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutees/:user/}
 */
export function useUsersTuteesUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UsersTuteesUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { user: UsersTuteesUpdatePathParams['user']; data: UsersTuteesUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<UsersTuteesUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTuteesUpdateMutationKey()

  return useMutation<
    UsersTuteesUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { user: UsersTuteesUpdatePathParams['user']; data: UsersTuteesUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ user, data }) => {
      return usersTuteesUpdate({ user }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}