'use client';

import React, { useEffect, useState } from 'react';
import { button, Intent, Size, lightTheme, darkTheme } from './button.css';
import { ThemeName } from '@/types/themes';
import useMyTheme from '@/hooks/useMyTheme';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  intent?: Intent;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  theme?: ThemeName;
}

const Button: React.FC<ButtonProps> = ({ children, intent, size, className = '', theme, ...props }) => {
  const { theme: clientTheme } = useMyTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    setIsDarkMode(clientTheme === 'dark');
  }, [clientTheme]);

  return (
    <button
      className={`${button({ intent, size })} ${isDarkMode ? darkTheme : lightTheme} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
