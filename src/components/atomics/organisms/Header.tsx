import React from 'react';
import ThemeToggle from '../molecules/ThemeToggle';
import * as style from './header.css';
import Logo from '../atoms/Logo';
import TopMenu from '../molecules/TopMenu';

/**
 * @desc 헤더
 */
export default function Header() {
  return (
    <header className={style.container}>
      <Logo />
      <TopMenu />
      <ThemeToggle />
    </header>
  );
}
