'use client';

import Image from 'next/image';
import React from 'react';
import * as style from './themeToggle.css';
import ToggleSwitch from '../atoms/ToggleSwitch';
import useMyTheme from '@/hooks/useMyTheme';
import useIsDarkMode from '@/hooks/useIsDarkMode';
import { LayoutProps } from '@/components/layouts/MainLayout';

/**
 * @desc 테마 선택 버튼
 * @returns
 */
export default function ThemeToggle({ initData }: LayoutProps) {
  const { theme: clientTheme, setTheme } = useMyTheme();
  const { theme } = initData;
  const isDarkMode = useIsDarkMode({ clientTheme, serverTheme: theme });

  const onClickChangeTheme = (e: React.MouseEvent) => {
    setTheme(e, isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className={style.container}>
      <ToggleSwitch
        onClick={onClickChangeTheme}
        isChecked={isDarkMode}>
        <Image
          src={isDarkMode ? '/icons/moon-icon.svg' : '/icons/sunny-icon.svg'}
          width={24}
          height={24}
          alt={isDarkMode ? 'dark-theme' : 'light-theme'}
          priority
        />
      </ToggleSwitch>
    </div>
  );
}
