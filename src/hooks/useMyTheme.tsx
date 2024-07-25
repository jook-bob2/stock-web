import { ThemeName } from '@/types/themes';
import { useTheme } from 'next-themes';
import Cookies from 'universal-cookie';
import useDebouncedClick from './useDebouncedClick';
import { cookieNames, getCookieOption } from '@/utils/cookie-utils';

/**
 * @desc 테마 데이터가 들어있는 훅
 * @returns
 */
export default function useMyTheme() {
  const theme = useTheme();

  const { handleClick: setTheme } = useDebouncedClick((e, value: ThemeName) => {
    e.preventDefault();

    theme.setTheme(value);
    const d = new Date();
    d.setFullYear(new Date().getFullYear() + 1);

    const cookies = new Cookies();
    cookies.set(cookieNames.theme, value, {
      ...getCookieOption(),
      expires: d,
    });
  }, 100);

  return {
    ...theme,
    theme: theme?.theme as ThemeName,
    setTheme,
  };
}
