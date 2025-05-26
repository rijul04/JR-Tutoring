;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type {
  UsersTuteesPartialUpdateMutationRequest,
  UsersTuteesPartialUpdateMutationResponse,
  UsersTuteesPartialUpdatePathParams,
} from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTuteesPartialUpdateMutationKey = () => [{ url: '/api/users/tutees/{user}/' }] as const

export type UsersTuteesPartialUpdateMutationKey = ReturnType<typeof usersTuteesPartialUpdateMutationKey>

/**
 * {@link /api/users/tutees/:user/}
 */
export async function usersTuteesPartialUpdate(
  { user }: { user: UsersTuteesPartialUpdatePathParams['user'] },
  data?: UsersTuteesPartialUpdateMutationRequest,
  config: Partial<RequestConfig<UsersTuteesPartialUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTuteesPartialUpdateMutationResponse, ResponseErrorConfig<Error>, UsersTuteesPartialUpdateMutationRequest>({
    method: 'PATCH',
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
export function useUsersTuteesPartialUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UsersTuteesPartialUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { user: UsersTuteesPartialUpdatePathParams['user']; data?: UsersTuteesPartialUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<UsersTuteesPartialUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTuteesPartialUpdateMutationKey()

  return useMutation<
    UsersTuteesPartialUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { user: UsersTuteesPartialUpdatePathParams['user']; data?: UsersTuteesPartialUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ user, data }) => {
      return usersTuteesPartialUpdate({ user }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}