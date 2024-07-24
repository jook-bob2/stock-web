'use client';

import React, { useLayoutEffect, useState } from 'react';
import MyImage from './MyImage';
import * as style from './logo.css';
import Link from 'next/link';
import { InitProps } from '@/types/initProps';
import useMyTheme from '@/hooks/useMyTheme';
import useIsDarkMode from '@/hooks/useIsDarkMode';

/**
 * @description 로고 이미지 가져오기
 * @param value
 * @returns
 */
const getSrc = (isDarkMode: boolean) => {
  const PREFIX = '/images/logo';
  return isDarkMode ? `${PREFIX}/logo-dark.png` : `${PREFIX}/logo-light.png`;
};

/**
 * @desc 로고
 */
export default function Logo({ initData }: InitProps) {
  const { theme: clientTheme } = useMyTheme();
  const { theme } = initData;
  const isDarkMode = useIsDarkMode({ clientTheme, serverTheme: theme });
  const [logoSrc, setLogoSrc] = useState(getSrc(isDarkMode));

  /**
   * @desc 로고 소스 적용
   */
  useLayoutEffect(() => {
    setLogoSrc(getSrc(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={style.container}>
      <Link href={'/'}>
        {logoSrc && (
          <MyImage
            src={logoSrc}
            width={76}
            height={76}
            alt={'로고'}
            priority
          />
        )}
      </Link>
    </div>
  );
}
