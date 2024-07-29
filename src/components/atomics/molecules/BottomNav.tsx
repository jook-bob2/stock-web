'use client';

import React from 'react';
import * as style from './bottomNav.css';
import MyLink from '../atoms/MyLink';
import { BOTTOM_MENU_LIST } from '@/constants/menu';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={style.container}>
      <div className={style.wrapper}>
        <ul className={style.ul}>
          {BOTTOM_MENU_LIST.map((menu) => (
            <li
              key={menu.link}
              className={style.menuList}>
              <MyLink href={menu.link}>
                <div className={`${pathname === menu.link ? style.activeIconWrapper : style.hiddenIconWrapper}`}>
                  <menu.icon className={style.icon} />
                </div>
                {menu.name}
              </MyLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
