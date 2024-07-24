import React from 'react';
import Header from '../atomics/organisms/Header';
import MainContent from '../atomics/organisms/MainContent';
import Footer from '../atomics/organisms/Footer';
import * as style from './mainLayout.css';
import { InitServerDataType } from '@/utils/server-util';

interface Props {
  children: React.ReactNode;
  initData: InitServerDataType;
}

export default function MainLayout({ children, ...props }: Props) {
  return (
    <div className={style.container}>
      <Header {...props} />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}
