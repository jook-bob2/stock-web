import React from 'react';
import * as style from './topMenu.css';
import MyLink from '../atoms/MyLink';
import { MENU_LIST } from '@/constants/menu';

export default function TopMenu() {
  return (
    <div className={style.container}>
      <nav>
        <ul className={style.parentUl}>
          {MENU_LIST.map((m) => (
            <li
              key={m.link}
              className={style.parentLi}>
              <MyLink
                href={m.link}
                className={style.parentLink}>
                {m.name}
              </MyLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
