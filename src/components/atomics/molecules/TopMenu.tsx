import React from 'react';
import * as style from './topMenu.css';
import MyLink from '../atoms/MyLink';

const MENU_LIST = [
  {
    name: '아이템1',
    href: '/item1',
  },
  {
    name: '아이템2',
    href: '/item2',
  },
  {
    name: '아이템3',
    href: '/item3',
  },
  {
    name: '아이템4',
    href: '/item4',
  },
];

export default function TopMenu() {
  return (
    <div className={style.container}>
      <nav>
        <ul className={style.parentUl}>
          {MENU_LIST.map((m, index) => (
            <li
              key={index}
              className={style.parentLi}>
              <MyLink
                href={m.href}
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
