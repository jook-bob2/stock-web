import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.themeColor.color.contentBackground,
  minHeight: '84vh',
  display: 'flex',
  borderRadius: '40px',
  boxSizing: 'border-box',
});

export const active = style({
  marginLeft: '100px',
  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      marginLeft: '0',
    },
  },
});

export const none = style({
  marginLeft: '0',
});

export const childWrapper = style({
  width: '100%',
  padding: '1.25rem',
  border: `solid 1px ${vars.themeColor.color.headerBackground}`,
  borderRadius: '40px',
  boxSizing: 'border-box',
});
