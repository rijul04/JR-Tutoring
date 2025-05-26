;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TokenRefreshCreateMutationRequest, TokenRefreshCreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const tokenRefreshCreateMutationKey = () => [{ url: '/api/token/refresh/' }] as const

export type TokenRefreshCreateMutationKey = ReturnType<typeof tokenRefreshCreateMutationKey>

/**
 * @description Takes a refresh type JSON web token and returns an access type JSON webtoken if the refresh token is valid.
 * {@link /api/token/refresh/}
 */
export async function tokenRefreshCreate(
  data: TokenRefreshCreateMutationRequest,
  config: Partial<RequestConfig<TokenRefreshCreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TokenRefreshCreateMutationResponse, ResponseErrorConfig<Error>, TokenRefreshCreateMutationRequest>({
    method: 'POST',
    url: `/api/token/refresh/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * @description Takes a refresh type JSON web token and returns an access type JSON webtoken if the refresh token is valid.
 * {@link /api/token/refresh/}
 */
export function useTokenRefreshCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<TokenRefreshCreateMutationResponse, ResponseErrorConfig<Error>, { data: TokenRefreshCreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<TokenRefreshCreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? tokenRefreshCreateMutationKey()

  return useMutation<TokenRefreshCreateMutationResponse, ResponseErrorConfig<Error>, { data: TokenRefreshCreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return tokenRefreshCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}