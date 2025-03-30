;`Kubb: Generated hooks`
import client from '@kubb/plugin-client/clients/axios'
import type { TestModelPartialUpdateMutationRequest, TestModelPartialUpdateMutationResponse, TestModelPartialUpdatePathParams } from '../../types/types.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const testModelPartialUpdateMutationKey = () => [{ url: '/api/test_model/{id}/' }] as const

export type TestModelPartialUpdateMutationKey = ReturnType<typeof testModelPartialUpdateMutationKey>

/**
 * {@link /api/test_model/:id/}
 */
export async function testModelPartialUpdate(
  { id }: { id: TestModelPartialUpdatePathParams['id'] },
  data?: TestModelPartialUpdateMutationRequest,
  config: Partial<RequestConfig<TestModelPartialUpdateMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TestModelPartialUpdateMutationResponse, ResponseErrorConfig<Error>, TestModelPartialUpdateMutationRequest>({
    method: 'PATCH',
    url: `/api/test_model/${id}/`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * {@link /api/test_model/:id/}
 */
export function useTestModelPartialUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TestModelPartialUpdateMutationResponse,
      ResponseErrorConfig<Error>,
      { id: TestModelPartialUpdatePathParams['id']; data?: TestModelPartialUpdateMutationRequest },
      TContext
    >
    client?: Partial<RequestConfig<TestModelPartialUpdateMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? testModelPartialUpdateMutationKey()

  return useMutation<
    TestModelPartialUpdateMutationResponse,
    ResponseErrorConfig<Error>,
    { id: TestModelPartialUpdatePathParams['id']; data?: TestModelPartialUpdateMutationRequest },
    TContext
  >({
    mutationFn: async ({ id, data }) => {
      return testModelPartialUpdate({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}