;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModel2UpdateMutationRequest, TestModel2UpdateMutationResponse, TestModel2UpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModel2UpdateMutationKey = () => [{ url: '/api/test_model_2/{id}/' }] as const

export type TestModel2UpdateMutationKey = ReturnType<typeof testModel2UpdateMutationKey>

/**
 * {@link /api/test_model_2/:id/}
 */
export async function testModel2Update(
  { id }: { id: TestModel2UpdatePathParams['id'] },
  data: TestModel2UpdateMutationRequest,
  config: Partial<RequestConfig<TestModel2UpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModel2UpdateMutationResponse, ResponseErrorConfig<Error>, TestModel2UpdateMutationRequest>({
    method: 'PUT',
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
export function useTestModel2Update<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TestModel2UpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { id: TestModel2UpdatePathParams['id']; data: TestModel2UpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<TestModel2UpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModel2UpdateMutationKey()

  return useMutation<
    TestModel2UpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { id: TestModel2UpdatePathParams['id']; data: TestModel2UpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ id, data }) => {
      return testModel2Update({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}