import '../styles/reset.css';
import '../styles/global.css';
import MainLayout from '@/components/layouts/MainLayout';
import RecoilContainer from '@/containers/RecoilContainer';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR, Roboto } from 'next/font/google';
import Provider from '@/stores/providers/ThemeProviders';

// 기본 폰트
const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

// 추가 폰트
const roboto = Roboto({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['100', '400', '700'],
  variable: '--roboto', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

const TITLE = '스톡 - 실시간 차트';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      suppressHydrationWarning>
      <body className={`${notoSansKr.className} ${roboto.variable}`}>
        <Provider>
          <RecoilContainer>
            <MainLayout>{children}</MainLayout>
          </RecoilContainer>
        </Provider>
      </body>
    </html>
  );
}
