import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.themeColor.color.contentBackground,
  minHeight: '84vh',
});
