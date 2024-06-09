import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const parentUl = style({
  display: 'flex',
});

export const parentLi = style({
  margin: '0 0.75rem',
});

export const parentLink = style({
  color: vars.themeColor.color.mainFontColor,
});
