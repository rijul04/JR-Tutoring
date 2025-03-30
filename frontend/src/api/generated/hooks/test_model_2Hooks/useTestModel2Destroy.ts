;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModel2DestroyMutationResponse, TestModel2DestroyPathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModel2DestroyMutationKey = () => [{ url: '/api/test_model_2/{id}/' }] as const

export type TestModel2DestroyMutationKey = ReturnType<typeof testModel2DestroyMutationKey>

/**
 * {@link /api/test_model_2/:id/}
 */
export async function testModel2Destroy({ id }: { id: TestModel2DestroyPathParams['id'] }, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModel2DestroyMutationResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'DELETE',
    url: `/api/test_model_2/${id}/`,
    baseURL: 'http://localhost:8000',
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model_2/:id/}
 */
export function useTestModel2Destroy<TContext>(
  options: {
    mutation?: UseMutationOptions<TestModel2DestroyMutationResponse, ResponseErrorConfig<Error>, { id: TestModel2DestroyPathParams['id'] }, TContext>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModel2DestroyMutationKey()

  return useMutation<TestModel2DestroyMutationResponse, ResponseErrorConfig<Error>, { id: TestModel2DestroyPathParams['id'] }, TContext>({
    mutationFn: async ({ id }) => {
      return testModel2Destroy({ id }, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}