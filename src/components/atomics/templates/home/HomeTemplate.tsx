import React from 'react';
import * as style from './home.css';
import HomeDomain from '@/components/domains/home/HomeDomain';
import { InitProps } from '@/types/initProps';
import { getUserInfo } from '@/net/apis/user/userApi';

export default async function HomeTemplate(props: InitProps) {
  const {
    initData: { isBot },
  } = props;
  const data = isBot ? await getUserInfo({ id: '1', gender: '1' }) : undefined;

  return (
    <section className={style.container}>
      <HomeDomain
        {...props}
        userInitData={data}
      />
    </section>
  );
}
