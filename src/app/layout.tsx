import '../styles/reset.css';
import '../styles/global.css';
import MainLayout from '@/components/layouts/MainLayout';
import type { Metadata, Viewport } from 'next';
import Provider from '@/stores/providers';
import { notoSansKr } from '@/styles/fonts';
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import { getServerInitData } from '@/utils/server-util';
import React from 'react';

const TITLE: TemplateString = {
  template: '%s | 스톡', // title 속성을 동적으로 설정할 수 있음.
  default: '스톡 - 실시간 차트', // 만약 title 속성이 정의되지 않은 페이지가 있을 경우 default 속성을 사용한다.
  // absolute: '', // 하위 페이지에서 사용된다. 상위 페이지의 title은 무시되고, 하위 페이지의 title을 설정할 수 있다.
};
const DESCRIPTION = '실시간 주식 데이터와 고급 차트 도구를 제공하는 강력한 웹 애플리케이션입니다.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: '',
    url: '',
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: '',
    card: 'summary',
  },
  icons: [''],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initData = await getServerInitData();

  return (
    <html
      lang='ko'
      suppressHydrationWarning>
      <body className={`${notoSansKr.className}`}>
        <Provider initData={initData}>
          <MainLayout initData={initData}>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
