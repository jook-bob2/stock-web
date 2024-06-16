'use client';

import { darkTheme, lightTheme } from '@/styles/global.css';
import { ThemeProvider } from 'next-themes';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}>
      {children}
    </ThemeProvider>
  );
}

export default Provider;
