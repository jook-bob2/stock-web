import { CookieSetOptions } from 'universal-cookie';

/**
 * @description 기본 쿠키 옵션
 * @returns
 */
export const getCookieOption = () => {
  return {
    domain: window.location.hostname,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  } as CookieSetOptions;
};

/**
 * @description 쿠키 이름들
 */
export const cookieNames = {
  isShowSide: 'isShowSide',
  theme: 'theme',
};
