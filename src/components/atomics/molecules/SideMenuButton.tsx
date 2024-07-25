'use client';

import { cookieNames, getCookieOption } from '@/utils/cookie-utils';
import React from 'react';
import Cookies from 'universal-cookie';
import HamburgerSvg from '/public/icons/hamburger.svg';
import * as style from './sideMenuButton.css';
import { LayoutProps } from '@/components/layouts/MainLayout';

export default function SideMenuButton({ onClickToggleSide, isSideOpen }: LayoutProps) {
  /**
   * @desc 사이드메뉴 펼치기/접기
   */
  const onClickSideNav = () => {
    onClickToggleSide();

    const cookies = new Cookies();
    const d = new Date();
    d.setFullYear(new Date().getFullYear() + 1);

    cookies.set(cookieNames.isShowSide, !isSideOpen, {
      ...getCookieOption(),
      expires: d,
    });
  };

  return (
    <div className={style.buttonContainer}>
      <button
        className={style.sideNavButton}
        onClick={onClickSideNav}
        aria-label='side menu'>
        <HamburgerSvg className={style.menuIcon} />
      </button>
    </div>
  );
}
