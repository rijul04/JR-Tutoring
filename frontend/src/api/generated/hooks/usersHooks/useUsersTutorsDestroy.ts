;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsDestroyMutationResponse, UsersTutorsDestroyPathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTutorsDestroyMutationKey = () => [{ url: '/api/users/tutors/{user}/' }] as const

export type UsersTutorsDestroyMutationKey = ReturnType<typeof usersTutorsDestroyMutationKey>

/**
 * {@link /api/users/tutors/:user/}
 */
export async function usersTutorsDestroy(
  { user }: { user: UsersTutorsDestroyPathParams['user'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsDestroyMutationResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'DELETE',
    url: `/api/users/tutors/${user}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutors/:user/}
 */
export function useUsersTutorsDestroy<TContext>(
  options: {
    mutation?: UseMutationOptions<UsersTutorsDestroyMutationResponse, ResponseErrorConfig<Error>, { user: UsersTutorsDestroyPathParams['user'] }, TContext>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTutorsDestroyMutationKey()

  return useMutation<UsersTutorsDestroyMutationResponse, ResponseErrorConfig<Error>, { user: UsersTutorsDestroyPathParams['user'] }, TContext>({
    mutationFn: async ({ user }) => {
      return usersTutorsDestroy({ user }, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}