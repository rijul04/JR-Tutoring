;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModelUpdateMutationRequest, TestModelUpdateMutationResponse, TestModelUpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModelUpdateMutationKey = () => [{ url: '/api/test_model/{id}/' }] as const

export type TestModelUpdateMutationKey = ReturnType<typeof testModelUpdateMutationKey>

/**
 * {@link /api/test_model/:id/}
 */
export async function testModelUpdate(
  { id }: { id: TestModelUpdatePathParams['id'] },
  data: TestModelUpdateMutationRequest,
  config: Partial<RequestConfig<TestModelUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModelUpdateMutationResponse, ResponseErrorConfig<Error>, TestModelUpdateMutationRequest>({
    method: 'PUT',
    url: `/api/test_model/${id}/`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model/:id/}
 */
export function useTestModelUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TestModelUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { id: TestModelUpdatePathParams['id']; data: TestModelUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<TestModelUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModelUpdateMutationKey()

  return useMutation<
    TestModelUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { id: TestModelUpdatePathParams['id']; data: TestModelUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ id, data }) => {
      return testModelUpdate({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}