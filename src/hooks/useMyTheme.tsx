import { ThemeName } from '@/types/themes';
import { useTheme } from 'next-themes';

/**
 * @desc 테마 데이터가 들어있는 훅
 * @returns
 */
export default function useMyTheme() {
  const theme = useTheme();

  return {
    ...theme,
    theme: theme?.theme as ThemeName,
  };
}
