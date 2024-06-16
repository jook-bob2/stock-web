'use client';

import React from 'react';
import MyImage from './MyImage';
import * as style from './logo.css';
import Link from 'next/link';

/**
 * @desc 로고
 */
export default function Logo() {
  return (
    <div className={style.container}>
      <Link href={'/'}>
        <MyImage
          src={'/vercel.svg'}
          width={62}
          height={62}
          alt={'logo image'}
          priority
        />
      </Link>
    </div>
  );
}
