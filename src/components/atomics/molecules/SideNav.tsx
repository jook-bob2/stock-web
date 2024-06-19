'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as style from './sideNav.css';
import HamburgerSvg from '/public/icons/hamburger.svg';
import CloseSvg from '/public/icons/close.svg';
import { MENU_LIST } from '@/constants/menu';
import MyLink from '../atoms/MyLink';
import MyImage from '../atoms/MyImage';
import useMyTheme from '@/hooks/useMyTheme';
import { useRouter } from 'next/navigation';

export default function SideNavIcon() {
  const router = useRouter();
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  const [logoSrc, setLogoSrc] = useState('');
  const { theme } = useMyTheme();

  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  /**
   * @desc 바깥 클릭 시 사이드네비게이션 닫기
   */
  useEffect(() => {
    if (isOpenSideNav) {
      const onClick = (e: MouseEvent) => {
        if (sideMenuRef && !sideMenuRef.current?.contains(e.target as HTMLDivElement)) {
          setIsOpenSideNav(false);
        }
      };
      window.addEventListener('mousedown', onClick);
      return () => {
        window.removeEventListener('mousedown', onClick);
      };
    }
  }, [isOpenSideNav]);

  /**
   * @desc 사이드메뉴 펼치기/접기
   */
  const onClickSideNav = () => {
    setIsOpenSideNav((open) => !open);

    const prefix = '/images/logo';
    setLogoSrc(theme === 'dark' ? `${prefix}/logo-dark.png` : `${prefix}/logo-light.png`);
  };

  /**
   * @desc 사이드메뉴 닫기
   */
  const onClickSideNavClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpenSideNav(false);
    router.push('/');
  };

  return (
    <>
      <div className={style.sideMenuWrapper}>
        <button
          className={style.sideNavButton}
          onClick={onClickSideNav}
          aria-label='side menu'>
          <HamburgerSvg className={style.menuIcon} />
        </button>
      </div>

      {isOpenSideNav && (
        <div
          ref={sideMenuRef}
          className={`${style.sideNavigationContainer} ${isOpenSideNav ? style.menuVisible : style.menuHidden}`}>
          <div className={style.sideNavigationWrapper}>
            <div className={style.sideNavigationHeader}>
              <div>
                <MyLink
                  href={'/'}
                  onClick={onClickSideNavClose}>
                  {logoSrc && (
                    <MyImage
                      src={logoSrc}
                      width={48}
                      height={48}
                      alt={'로고'}
                      priority
                    />
                  )}
                </MyLink>
              </div>
              <div>헤더</div>
              <div className={style.sideNavigationCloseArea}>
                <button
                  className={style.sideNavigationCloseButton}
                  onClick={onClickSideNavClose}
                  aria-label='닫기'>
                  <CloseSvg className={style.sideNavigationCloseSvg} />
                </button>
              </div>
            </div>
            <ul>
              {MENU_LIST.map((m, index) => (
                <li key={index}>
                  <MyLink href={m.link}>{m.name}</MyLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
