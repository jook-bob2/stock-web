'use client';

import React from 'react';
import * as style from './sideNav.css';
import MyLink from '../atoms/MyLink';
import { SIDE_MENU_LIST } from '@/constants/menu';
import { LayoutProps } from '@/components/layouts/MainLayout';

export default function SideNav({ isSideOpen }: LayoutProps) {
  return (
    <nav className={`${style.container} ${isSideOpen ? style.activeMenu : style.hideMenu}`}>
      <div className={style.menuListWrapper}>
        <ul>
          {SIDE_MENU_LIST.map((menu) => (
            <li
              key={menu.link}
              className={style.menuList}>
              <MyLink href={menu.link}>
                <menu.icon className={style.icon} />
                {menu.name}
              </MyLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
