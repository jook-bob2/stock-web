'use client';

import { ThemeContextType } from '@/types/themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import * as style from './themeToggle.css';
import ToggleSwitch from '../atoms/ToggleSwitch';

/**
 * @desc 테마 선택 버튼
 * @returns
 */
export default function ThemeToggle() {
  const [isRender, setIsRender] = useState(false);
  const { theme, setTheme } = useTheme() as ThemeContextType;

  useEffect(() => {
    setIsRender(true);
  }, []);

  const onClickChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!isRender) return null;

  return (
    <div className={style.container}>
      <ToggleSwitch
        onClick={onClickChangeTheme}
        isChecked={theme === 'dark'}>
        <Image
          src={theme === 'dark' ? '/icons/moon-icon.svg' : '/icons/sunny-icon.svg'}
          width={24}
          height={24}
          alt={theme === 'dark' ? 'dark-theme' : 'light-theme'}
          priority
        />
      </ToggleSwitch>
    </div>
  );
}
