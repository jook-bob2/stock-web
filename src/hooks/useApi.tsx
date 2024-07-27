import { ApiError } from '@/lib/errorHandler';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions, QueryKey } from '@tanstack/react-query';

/**
 * @param key
 * @param apiMethod
 * @param options
 * @returns
 */
export function useApiQuery<TData, TError = ApiError>(
  key: QueryKey | null,
  apiMethod: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, 'queryKey' | 'queryFn'>,
) {
  const shouldFetch = key !== null; // fetch 가능 여부

  return useQuery<TData, TError, TData, QueryKey>({
    queryKey: key || [],
    queryFn: apiMethod,
    enabled: shouldFetch,
    ...options,
  });
}

/**
 * @param apiMethod
 * @param options
 * @returns
 */
export function useApiMutation<TData, TVariables, TError = ApiError>(
  apiMethod: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables>,
) {
  return useMutation<TData, TError, TVariables>({
    mutationFn: apiMethod,
    ...options,
  });
}

// 특정 API 엔드포인트에 대한 커스텀 훅
// export function useUserList(options?: UseQueryOptions<UserResponse[], ApiError>) {
//     return useApiQuery(['users'], api.getUserList, {
//       refetchInterval: 60 * 1000, // 1분마다 리프레시
//       ...options,
//     });
//   }

//   export function useUpdateUser() {
//     return useMutation<UserResponse, ApiError, { id: string, updateData: UpdateUserRequest }>(
//       ({ id, updateData }) => api.updateUser(id, updateData),
//       {
//         onSuccess: (data, variables, context) => {
//           // 캐시 업데이트 로직
//         },
//         onError: (error, variables, context) => {
//           // 에러 처리 로직
//         },
//       }
//     );
//   }
