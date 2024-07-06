'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

/**
 * @desc TanStack query provider
 */
export default function TanStackQueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
