import React from 'react';
import * as style from './home.css';
import executeQuery from '@/lib/db';
import { unstable_noStore } from 'next/cache';

type ReqType = {
  id: number;
  gender: string;
}[];

type ResType = {
  id: number;
  user_steve_map_id: number;
  default_user_ev_id: number;
  email: string;
  passwd: string;
  user_type_cd: string;
  name: string;
  hp_co_cd: string;
  hp: string;
  birthdate: Date;
  gender: '0' | '1';
  frnr_flag: 'N' | 'Y';
  wpay_user_key: null;
  ci: null;
  validity_period: number;
  verify_flag: 'N' | 'Y';
  dormant_flag: 'N' | 'Y';
  pin_flag: 'N' | 'Y';
  login_date: Date;
  reg_date: Date;
  out_date: Date;
  fail_cnt: number;
  pay_flag: 'N' | 'Y';
  lock_flag: 'N' | 'Y';
  lock_date: Date;
}[];

export default async function HomeTemplate() {
  unstable_noStore();
  let email = '';

  try {
    const data = await executeQuery<ReqType, ResType>('SELECT * FROM user WHERE id=1 and gender=1');
    if (data && data?.length > 0) {
      email = data[0].email;
    }
  } catch (error) {
    console.error('error ', error);
  }

  return <section className={style.container}>{email}</section>;
}
