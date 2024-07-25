import React from 'react';
import * as style from './header.css';
import ThemeToggle from '../molecules/ThemeToggle';
import SideMenuButton from '../molecules/SideMenuButton';
import { LayoutProps } from '@/components/layouts/MainLayout';

/**
 * @desc 헤더
 */
export default function Header({ ...props }: LayoutProps) {
  return (
    <header className={style.container}>
      {/* 사이드 메뉴 버튼 */}
      <SideMenuButton {...props} />
      {/* 테마 버튼 */}
      <ThemeToggle {...props} />
    </header>
  );
}
