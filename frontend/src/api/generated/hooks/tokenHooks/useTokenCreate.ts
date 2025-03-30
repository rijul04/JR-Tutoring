;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TokenCreateMutationRequest, TokenCreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const tokenCreateMutationKey = () => [{ url: '/api/token/' }] as const

export type TokenCreateMutationKey = ReturnType<typeof tokenCreateMutationKey>

/**
 * @description Takes a set of user credentials and returns an access and refresh JSON webtoken pair to prove the authentication of those credentials.
 * {@link /api/token/}
 */
export async function tokenCreate(
  data: TokenCreateMutationRequest,
  config: Partial<RequestConfig<TokenCreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TokenCreateMutationResponse, ResponseErrorConfig<Error>, TokenCreateMutationRequest>({
    method: 'POST',
    url: `/api/token/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * @description Takes a set of user credentials and returns an access and refresh JSON webtoken pair to prove the authentication of those credentials.
 * {@link /api/token/}
 */
export function useTokenCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<TokenCreateMutationResponse, ResponseErrorConfig<Error>, { data: TokenCreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<TokenCreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? tokenCreateMutationKey()

  return useMutation<TokenCreateMutationResponse, ResponseErrorConfig<Error>, { data: TokenCreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return tokenCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}