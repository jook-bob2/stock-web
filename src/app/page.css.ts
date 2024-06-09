import { vars } from '@/styles/global.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '80vh',
});

globalStyle(`${container} > p`, {
  fontSize: vars.fontSize.medium,
  lineHeight: 1.8,
  color: vars.color.darkBlue[400],
});
