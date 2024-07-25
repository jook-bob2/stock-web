'use client';

import React, { useState } from 'react';
import Header from '../atomics/organisms/Header';
import MainContent from '../atomics/organisms/MainContent';
import Footer from '../atomics/organisms/Footer';
import * as style from './mainLayout.css';
import { InitServerDataType } from '@/utils/server-util';
import SideNav from '../atomics/molecules/SideNav';
import { InitProps } from '@/types/initProps';

interface Props {
  children: React.ReactNode;
  initData: InitServerDataType;
}

export interface LayoutProps extends InitProps {
  isSideOpen: boolean;
  onClickToggleSide: () => void;
}

export default function MainLayout({ children, ...props }: Props) {
  const [isSideOpen, setIsSideOpen] = useState(props.initData.isSideOpen); // 사이드 메뉴 오픈 여부

  /**
   * @description 사이드 메뉴 토글
   */
  const onClickToggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };

  /**
   * @description 레이아웃 프롭스
   */
  const layoutProp: LayoutProps = {
    ...props,
    isSideOpen,
    onClickToggleSide,
  };

  return (
    <div className={style.container}>
      {/* 헤더 */}
      <Header {...layoutProp} />
      {/* 사이드 네비게이션 */}
      <SideNav {...layoutProp} />
      {/* 콘텐트 */}
      <MainContent {...layoutProp}>{children}</MainContent>
      {/* 푸터 */}
      <Footer />
    </div>
  );
}
