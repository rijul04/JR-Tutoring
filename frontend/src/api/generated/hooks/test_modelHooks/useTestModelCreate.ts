;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModelCreateMutationRequest, TestModelCreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModelCreateMutationKey = () => [{ url: '/api/test_model/' }] as const

export type TestModelCreateMutationKey = ReturnType<typeof testModelCreateMutationKey>

/**
 * {@link /api/test_model/}
 */
export async function testModelCreate(
  data: TestModelCreateMutationRequest,
  config: Partial<RequestConfig<TestModelCreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModelCreateMutationResponse, ResponseErrorConfig<Error>, TestModelCreateMutationRequest>({
    method: 'POST',
    url: `/api/test_model/`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model/}
 */
export function useTestModelCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<TestModelCreateMutationResponse, ResponseErrorConfig<Error>, { data: TestModelCreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<TestModelCreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModelCreateMutationKey()

  return useMutation<TestModelCreateMutationResponse, ResponseErrorConfig<Error>, { data: TestModelCreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return testModelCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}