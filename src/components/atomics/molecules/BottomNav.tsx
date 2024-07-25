import { bottomNav } from '@/components/layouts/mainLayout.css';
import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <nav className={bottomNav}>
      <span>홈</span>
      <span>종목목록</span>
      <span>설정</span>
    </nav>
  );
};

export default BottomNav;
