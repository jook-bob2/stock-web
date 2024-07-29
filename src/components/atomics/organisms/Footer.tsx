import React from 'react';
import * as style from './footer.css';
import BottomNav from '../molecules/BottomNav';

export default function Footer() {
  return (
    <footer className={style.container}>
      {/* 태블릿 초과 푸터 */}
      <div className={style.footerArea}>
        <span>Stock@Js.kim</span>
      </div>
      {/* 태블릿 이하 바텀 메뉴 */}
      <BottomNav />
    </footer>
  );
}
