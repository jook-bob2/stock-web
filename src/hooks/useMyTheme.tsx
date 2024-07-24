import { ThemeName } from '@/types/themes';
import { useTheme } from 'next-themes';
import Cookies from 'universal-cookie';
import useDebouncedClick from './useDebouncedClick';

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
    d.setDate(new Date().getDate() + 1);

    const cookies = new Cookies();
    cookies.set('theme', value, {
      domain: window.location.hostname,
      path: '/',
      expires: d,
      secure: false,
      sameSite: 'strict',
    });
  }, 100);

  return {
    ...theme,
    theme: theme?.theme as ThemeName,
    setTheme,
  };
}
