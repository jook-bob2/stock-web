import { ThemeName } from '@/types/themes';
import { useLayoutEffect, useState } from 'react';

interface PramsType {
  serverTheme: ThemeName;
  clientTheme: ThemeName;
}

/**
 * @description 다크모드 여부 훅
 * @param PramsType
 * @returns {boolean}
 */
export default function useIsDarkMode({ clientTheme, serverTheme }: PramsType) {
  const [isDarkMode, setIsDarkMode] = useState(serverTheme === 'dark');

  /**
   * @description 클라이언트에서 테마가 바뀌면, 다크모드 여부 상태 변경
   */
  useLayoutEffect(() => {
    if (clientTheme) setIsDarkMode(clientTheme === 'dark');
  }, [clientTheme]);

  return isDarkMode;
}
