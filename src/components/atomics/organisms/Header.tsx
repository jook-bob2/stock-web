import React from 'react';
import * as style from './header.css';
import Logo from '../atoms/Logo';
import TopMenu from '../molecules/TopMenu';
import SideNav from '../molecules/SideNav';
import { InitProps } from '@/types/initProps';
import ThemeToggle from '../molecules/ThemeToggle';

/**
 * @desc 헤더
 */
export default function Header(props: InitProps) {
  return (
    <header className={style.container}>
      {/* 사이드 네비게이션 */}
      <SideNav />
      {/* 로고 */}
      <Logo {...props} />
      {/* 상위 메뉴 */}
      <TopMenu />
      {/* 테마 버튼 */}
      <ThemeToggle {...props} />
    </header>
  );
}
