;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModel2CreateMutationRequest, TestModel2CreateMutationResponse } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModel2CreateMutationKey = () => [{ url: '/api/test_model_2/' }] as const

export type TestModel2CreateMutationKey = ReturnType<typeof testModel2CreateMutationKey>

/**
 * {@link /api/test_model_2/}
 */
export async function testModel2Create(
  data: TestModel2CreateMutationRequest,
  config: Partial<RequestConfig<TestModel2CreateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModel2CreateMutationResponse, ResponseErrorConfig<Error>, TestModel2CreateMutationRequest>({
    method: 'POST',
    url: `/api/test_model_2/`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model_2/}
 */
export function useTestModel2Create<TContext>(
  options: {
    mutation?: UseMutationOptions<TestModel2CreateMutationResponse, ResponseErrorConfig<Error>, { data: TestModel2CreateMutationRequest }, TContext>
    client?: Partial<RequestConfig<TestModel2CreateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModel2CreateMutationKey()

  return useMutation<TestModel2CreateMutationResponse, ResponseErrorConfig<Error>, { data: TestModel2CreateMutationRequest }, TContext>({
    mutationFn: async ({ data }) => {
      return testModel2Create(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}