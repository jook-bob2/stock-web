import { Noto_Sans_KR, Roboto } from 'next/font/google';

// 기본 폰트
export const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

// 추가 폰트
export const roboto = Roboto({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['100', '400', '700'],
  variable: '--roboto', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});
