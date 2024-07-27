'use client';

import { ApiError, handleApiError } from '@/lib/errorHandler';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

/**
 * @desc TanStack query provider
 */
export default function TanStackQueryProvider({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
            retry: (failureCount, error) => {
              if (error instanceof ApiError && error.status === 404) {
                return false; // 404 에러는 재시도하지 않음
              }
              return failureCount < 5; // 최대 5번 재시도
            },
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // 지수 백오프, 최대 30초
            refetchOnWindowFocus: false, // 창 포커스 시 자동 리페치 비활성화
            gcTime: 5 * 60 * 1000, // 5분
          },
          mutations: {
            retry: 5, // 변이 작업도 최대 5번 재시도
            onError: handleApiError,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
