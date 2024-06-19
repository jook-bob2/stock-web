'use client';

import React, { useLayoutEffect, useState } from 'react';
import MyImage from './MyImage';
import * as style from './logo.css';
import Link from 'next/link';

import useMyTheme from '@/hooks/useMyTheme';

/**
 * @desc 로고
 */
export default function Logo() {
  const { theme } = useMyTheme();

  const [logoSrc, setLogoSrc] = useState('');

  /**
   * @desc 로고 소스 적용
   */
  useLayoutEffect(() => {
    if (theme) {
      const prefix = '/images/logo';
      setLogoSrc(theme === 'dark' ? `${prefix}/logo-dark.png` : `${prefix}/logo-light.png`);
    }
  }, [theme]);

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
