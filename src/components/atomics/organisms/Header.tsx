import React from 'react';
import * as style from './header.css';
import Logo from '../atoms/Logo';
import TopMenu from '../molecules/TopMenu';
import dynamic from 'next/dynamic';

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
      <Logo />
      <TopMenu />
      <SetThemeButton />
    </header>
  );
}
