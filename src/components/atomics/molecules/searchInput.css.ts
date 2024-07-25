import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      display: 'none',
    },
  },
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  height: '40px',
  border: '1px solid #e0e0e0',
  borderRadius: '20px',
  padding: '0 15px',
  boxShadow: `0px 1px 1px ${vars.color['gray-500']}`,
  backgroundColor: vars.color['white-50'],
});

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  marginLeft: '4px',
  backgroundColor: vars.color['white-50'],
  color: vars.color['black-500'],

  '::placeholder': {
    color: vars.color['gray-400'],
  },
});

export const iconButton = style({});

export const searchIcon = style({
  width: '16px',
  height: '16px',
  fill: vars.color['black-500'],
});
