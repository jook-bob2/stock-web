import React from 'react';
import * as style from './mainContent.css';

interface Props {
  children: React.ReactNode;
}

export default function MainContent({ children }: Props) {
  return <main className={style.container}>{children}</main>;
}
