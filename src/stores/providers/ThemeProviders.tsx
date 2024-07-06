'use client';

import { darkTheme, lightTheme } from '@/styles/global.css';
import { ThemeProvider as Provider } from 'next-themes';

/**
 * @desc 테마 Provider
 */
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      attribute='class'
      defaultTheme='light'
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}>
      {children}
    </Provider>
  );
}

export default ThemeProvider;
