;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModel2PartialUpdateMutationRequest, TestModel2PartialUpdateMutationResponse, TestModel2PartialUpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModel2PartialUpdateMutationKey = () => [{ url: '/api/test_model_2/{id}/' }] as const

export type TestModel2PartialUpdateMutationKey = ReturnType<typeof testModel2PartialUpdateMutationKey>

/**
 * {@link /api/test_model_2/:id/}
 */
export async function testModel2PartialUpdate(
  { id }: { id: TestModel2PartialUpdatePathParams['id'] },
  data?: TestModel2PartialUpdateMutationRequest,
  config: Partial<RequestConfig<TestModel2PartialUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModel2PartialUpdateMutationResponse, ResponseErrorConfig<Error>, TestModel2PartialUpdateMutationRequest>({
    method: 'PATCH',
    url: `/api/test_model_2/${id}/`,
    baseURL: 'http://localhost:8000',
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model_2/:id/}
 */
export function useTestModel2PartialUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TestModel2PartialUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { id: TestModel2PartialUpdatePathParams['id']; data?: TestModel2PartialUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<TestModel2PartialUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModel2PartialUpdateMutationKey()

  return useMutation<
    TestModel2PartialUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { id: TestModel2PartialUpdatePathParams['id']; data?: TestModel2PartialUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ id, data }) => {
      return testModel2PartialUpdate({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}