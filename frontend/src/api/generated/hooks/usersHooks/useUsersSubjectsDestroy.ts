;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersSubjectsDestroyMutationResponse, UsersSubjectsDestroyPathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersSubjectsDestroyMutationKey = () => [{ url: '/api/users/subjects/{id}/' }] as const

export type UsersSubjectsDestroyMutationKey = ReturnType<typeof usersSubjectsDestroyMutationKey>

/**
 * {@link /api/users/subjects/:id/}
 */
export async function usersSubjectsDestroy(
  { id }: { id: UsersSubjectsDestroyPathParams['id'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersSubjectsDestroyMutationResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'DELETE',
    url: `/api/users/subjects/${id}/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/subjects/:id/}
 */
export function useUsersSubjectsDestroy<TContext>(
  options: {
    mutation?: UseMutationOptions<UsersSubjectsDestroyMutationResponse, ResponseErrorConfig<Error>, { id: UsersSubjectsDestroyPathParams['id'] }, TContext>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersSubjectsDestroyMutationKey()

  return useMutation<UsersSubjectsDestroyMutationResponse, ResponseErrorConfig<Error>, { id: UsersSubjectsDestroyPathParams['id'] }, TContext>({
    mutationFn: async ({ id }) => {
      return usersSubjectsDestroy({ id }, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}