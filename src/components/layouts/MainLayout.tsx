import React from 'react';
import Header from '../atomics/organisms/Header';
import MainContent from '../atomics/organisms/MainContent';
import Footer from '../atomics/organisms/Footer';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}
