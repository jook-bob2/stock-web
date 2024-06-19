import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  position: 'relative',
  backgroundColor: vars.themeColor.color.headerBackground,
  alignItems: 'center',
  minHeight: '8vh',
});
