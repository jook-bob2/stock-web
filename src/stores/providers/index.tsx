import React from 'react';
import ThemeProviders from './ThemeProviders';
import TanStackQueryProvider from './QueryClientProvider';
import { InitServerDataType } from '@/utils/server-util';

interface Props {
  children: React.ReactNode;
  initData: InitServerDataType;
}

const contexts = [TanStackQueryProvider, ThemeProviders].reverse();

/**
 * @description Provider context를 생성하여 하위 컴포넌트를 렌더링하는 함수
 */
export default function Provider({ children, initData }: Props) {
  return <>{contexts.reduce((prev, context) => React.createElement(context, { initData } as Props, prev), children)}</>;
}
