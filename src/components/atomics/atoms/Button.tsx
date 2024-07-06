'use client';

import React from 'react';

/**
 * @todo @vanilla-extract/recipes 설치 후 개발 예정
 */

// type Color =
//   | 'contentBackground'
//   | 'white'
//   | 'whiteYellow'
//   | 'yellow'
//   | 'whiteBlue'
//   | 'bluePurple'
//   | 'lightBlue'
//   | 'lightGray'
//   | 'whiteGray'
//   | 'darkGray'
//   | 'lime'
//   | 'lightRed'
//   | 'pink'
//   | 'red'
//   | 'black';

// type Size = 'S' | 'XS' | 'M' | 'L' | 'XL';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // color: Color;
  // size: Size;
  children: React.ReactNode;
}

function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}

export default Button;
