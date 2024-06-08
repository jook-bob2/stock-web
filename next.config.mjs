import TerserPlugin from 'terser-webpack-plugin';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_ENV === 'production',
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true,
    },
  },
  compress: true, // 번들 압축 설정
  poweredByHeader: false, // 응답 헤더에 "X-Powered-By" 필드를 포함하지 않음.
  skipTrailingSlashRedirect: true,
  images: {},
  reactStrictMode: false,
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      const isProd = process.env.NEXT_PUBLIC_ENV === 'production';
      const isDev = dev;

      config.optimization.minimize = !isDev;
      config.optimization.minimizer = !isDev
        ? [
            new TerserPlugin({
              test: /\.(js|jsx|ts|tsx)$/,
              parallel: true,
              terserOptions: {
                safari10: true,
                ecma: 5,
                format: {
                  comments: false, // 빌드 시 comment 제거 (false : 주석 제거)
                },
                compress: {
                  side_effects: true, // 부작용이 없고 결과가 사용되지 않는 표현식을 제거합니다.
                  drop_console: isProd, // 빌드 시, console.* 구문 코드 제거
                },
              },
            }),
          ]
        : [];
    }

    return config;
  },
};

export default withVanillaExtract(nextConfig);
