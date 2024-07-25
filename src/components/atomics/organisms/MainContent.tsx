import React from 'react';
import * as style from './mainContent.css';
import { LayoutProps } from '@/components/layouts/MainLayout';

interface Props extends LayoutProps {
  children: React.ReactNode;
}

export default function MainContent({ children, isSideOpen }: Props) {
  return (
    <main className={`${style.container} ${isSideOpen ? style.active : style.none}`}>
      <div className={style.childWrapper}>{children}</div>
    </main>
  );
}
