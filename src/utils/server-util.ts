import { headers, cookies } from 'next/headers';
import { getSelectorDevice } from './user-agent-util';
import { getIsBot } from './bot-util';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { TOKEN_OPTION } from '@/constants/token';

type ProfileType = {
  name: string;
};

export type InitServerDataType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSafari: boolean;
  isIos: boolean;
  isAos: boolean;
  isBot: boolean;
  profile: ProfileType | null;
};

/**
 * @description 서버의 헤더 및 쿠키 정보에 따른 데이터 가져오기
 */
export const getServerInitData = async (): Promise<InitServerDataType> => {
  const serverHeader = headers();
  const serverCookie = cookies();
  const profile = (await getProfile(serverCookie)) ?? null;
  const userAgent = serverHeader.get('user-agent');
  const { isAndroid: isAos, isIOS: isIos, isMobile, isTablet, isDesktop, isSafari } = getSelectorDevice(userAgent);
  const isBot = getIsBot(userAgent);

  return {
    isAos,
    isIos,
    isDesktop,
    isTablet,
    isMobile,
    isSafari,
    isBot,
    profile,
  };
};

/**
 * @description 프로필 정보 가져오기(임시)
 * @param serverCookie
 * @returns
 */
const getProfile = async (serverCookie: ReadonlyRequestCookies): Promise<ProfileType | undefined> => {
  const token = serverCookie.get('auth-tk');

  if (token) {
    try {
      const res = await fetch('/profile', {
        headers: {
          Authorization: `${TOKEN_OPTION.BEARER} ${token}`,
        },
      });
      // const data = res.json();
      console.log('response ', res.json());

      return { name: '' };
    } catch (error) {
      console.error(error);
    }
  }
};
