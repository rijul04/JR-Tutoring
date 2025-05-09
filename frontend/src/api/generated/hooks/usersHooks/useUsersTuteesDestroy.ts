;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTuteesDestroyMutationResponse, UsersTuteesDestroyPathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTuteesDestroyMutationKey = () => [{ url: '/api/users/tutees/{user}/' }] as const

export type UsersTuteesDestroyMutationKey = ReturnType<typeof usersTuteesDestroyMutationKey>

/**
 * {@link /api/users/tutees/:user/}
 */
export async function usersTuteesDestroy(
  { user }: { user: UsersTuteesDestroyPathParams['user'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTuteesDestroyMutationResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'DELETE',
    url: `/api/users/tutees/${user}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutees/:user/}
 */
export function useUsersTuteesDestroy<TContext>(
  options: {
    mutation?: UseMutationOptions<UsersTuteesDestroyMutationResponse, ResponseErrorConfig<Error>, { user: UsersTuteesDestroyPathParams['user'] }, TContext>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTuteesDestroyMutationKey()

  return useMutation<UsersTuteesDestroyMutationResponse, ResponseErrorConfig<Error>, { user: UsersTuteesDestroyPathParams['user'] }, TContext>({
    mutationFn: async ({ user }) => {
      return usersTuteesDestroy({ user }, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}