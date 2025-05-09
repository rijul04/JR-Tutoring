;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTuteesCreateMutationRequest, UsersTuteesCreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTuteesCreateMutationKey = () => [{ url: '/api/users/tutees/' }] as const

export type UsersTuteesCreateMutationKey = ReturnType<typeof usersTuteesCreateMutationKey>

/**
 * {@link /api/users/tutees/}
 */
export async function usersTuteesCreate(
  data: UsersTuteesCreateMutationRequest,
  config: Partial<RequestConfig<UsersTuteesCreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTuteesCreateMutationResponse, ResponseErrorConfig<Error>, UsersTuteesCreateMutationRequest>({
    method: 'POST',
    url: `/api/users/tutees/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutees/}
 */
export function useUsersTuteesCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<UsersTuteesCreateMutationResponse, ResponseErrorConfig<Error>, { data: UsersTuteesCreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<UsersTuteesCreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTuteesCreateMutationKey()

  return useMutation<UsersTuteesCreateMutationResponse, ResponseErrorConfig<Error>, { data: UsersTuteesCreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return usersTuteesCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}