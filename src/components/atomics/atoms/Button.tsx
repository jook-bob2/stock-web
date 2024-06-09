'use client';

import React from 'react';

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

interface Props {
  // color: Color;
  // size: Size;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
