;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { UsersTutorsCreateMutationRequest, UsersTutorsCreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const usersTutorsCreateMutationKey = () => [{ url: '/api/users/tutors/' }] as const

export type UsersTutorsCreateMutationKey = ReturnType<typeof usersTutorsCreateMutationKey>

/**
 * {@link /api/users/tutors/}
 */
export async function usersTutorsCreate(
  data: UsersTutorsCreateMutationRequest,
  config: Partial<RequestConfig<UsersTutorsCreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UsersTutorsCreateMutationResponse, ResponseErrorConfig<Error>, UsersTutorsCreateMutationRequest>({
    method: 'POST',
    url: `/api/users/tutors/`,
    baseURL: 'https://jr-backend-zfoi.onrender.com',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/users/tutors/}
 */
export function useUsersTutorsCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<UsersTutorsCreateMutationResponse, ResponseErrorConfig<Error>, { data: UsersTutorsCreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<UsersTutorsCreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? usersTutorsCreateMutationKey()

  return useMutation<UsersTutorsCreateMutationResponse, ResponseErrorConfig<Error>, { data: UsersTutorsCreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return usersTutorsCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}