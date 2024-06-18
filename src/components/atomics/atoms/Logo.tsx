'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import MyImage from './MyImage';
import * as style from './logo.css';
import Link from 'next/link';
import HamburgerSvg from '/public/icons/hamburger.svg';
import CloseSvg from '/public/icons/close.svg';
import useMyTheme from '@/hooks/useMyTheme';
import { MENU_LIST } from '@/constants/menu';
import MyLink from './MyLink';
import { useRouter } from 'next/navigation';

/**
 * @desc 로고
 */
export default function Logo() {
  const { theme } = useMyTheme();
  const router = useRouter();
  const [logoSrc, setLogoSrc] = useState('');
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);

  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  /**
   * @desc 로고 소스 적용
   */
  useLayoutEffect(() => {
    if (theme) {
      const prefix = '/images/logo';
      setLogoSrc(theme === 'dark' ? `${prefix}/logo-dark.png` : `${prefix}/logo-light.png`);
    }
  }, [theme]);

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
      <div className={style.container}>
        <div className={style.sideMenuWrapper}>
          <button
            className={style.sideNavButton}
            onClick={onClickSideNav}
            aria-label='side menu'>
            <HamburgerSvg className={style.menuIcon} />
          </button>
        </div>
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

      {isOpenSideNav && (
        <div
          ref={sideMenuRef}
          className={`${style.sideNavigationContainer} ${isOpenSideNav ? style.menuVisible : style.menuHidden}`}>
          <div className={style.sideNavigationWrapper}>
            <div className={style.sideNavigationHeader}>
              <div>
                <Link
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
                </Link>
              </div>
              <div>헤더</div>
              <div className={style.sideNavigationClose}>
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
