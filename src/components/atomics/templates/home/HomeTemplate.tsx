'use client';

import React from 'react';
import * as style from './home.css';
import Button from '../../atoms/Button';
import { MainServiceResType } from '@/types/services';

export default function HomeTemplate({ initData }: MainServiceResType) {
  return (
    <section className={style.container}>
      <Button
        onClick={() => console.log('click')}
        intent='lightRed'
        size='M'
        theme={initData.theme}>
        버튼
      </Button>
    </section>
  );
}
