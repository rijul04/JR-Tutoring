;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModelDestroyMutationResponse, TestModelDestroyPathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModelDestroyMutationKey = () => [{ url: '/api/test_model/{id}/' }] as const

export type TestModelDestroyMutationKey = ReturnType<typeof testModelDestroyMutationKey>

/**
 * {@link /api/test_model/:id/}
 */
export async function testModelDestroy({ id }: { id: TestModelDestroyPathParams['id'] }, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModelDestroyMutationResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'DELETE',
    url: `/api/test_model/${id}/`,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model/:id/}
 */
export function useTestModelDestroy<TContext>(
  options: {
    mutation?: UseMutationOptions<TestModelDestroyMutationResponse, ResponseErrorConfig<Error>, { id: TestModelDestroyPathParams['id'] }, TContext>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModelDestroyMutationKey()

  return useMutation<TestModelDestroyMutationResponse, ResponseErrorConfig<Error>, { id: TestModelDestroyPathParams['id'] }, TContext>({
    mutationFn: async ({ id }) => {
      return testModelDestroy({ id }, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}