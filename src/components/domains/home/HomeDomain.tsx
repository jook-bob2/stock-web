'use client';

import HomeService from '@/services/home/HomeService';
import { HomeServiceReqType } from '@/types/services';
import React from 'react';

export default function HomeDomain(props: HomeServiceReqType) {
  const { userData, isLoading } = HomeService(props);

  if (isLoading) return <h1>로딩중...</h1>;

  if (userData?.statusCd === '404') return <h1>데이터가 없습니다</h1>;

  return <div>{userData?.data?.email}</div>;
}
