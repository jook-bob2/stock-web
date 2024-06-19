import React from 'react';
import * as style from './header.css';
import Logo from '../atoms/Logo';
import TopMenu from '../molecules/TopMenu';
import dynamic from 'next/dynamic';
import SideNav from '../molecules/SideNav';

const SetThemeButton = dynamic(() => import('../molecules/ThemeToggle'), {
  ssr: false,
  loading: () => <></>,
});

/**
 * @desc 헤더
 */
export default function Header() {
  return (
    <header className={style.container}>
      {/* 사이드 네비게이션 */}
      <SideNav />
      {/* 로고 */}
      <Logo />
      {/* 상위 메뉴 */}
      <TopMenu />
      {/* 테마 버튼 */}
      <SetThemeButton />
    </header>
  );
}
