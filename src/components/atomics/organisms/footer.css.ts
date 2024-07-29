import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.themeColor.color.footerBackground,
});

export const footerArea = style({
  height: '8vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      display: 'none',
    },
  },
});
