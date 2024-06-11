import React from 'react';
import Header from '../atomics/organisms/Header';
import MainContent from '../atomics/organisms/MainContent';
import Footer from '../atomics/organisms/Footer';
import * as style from './mainLayout.css';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}
