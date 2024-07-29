import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style, globalStyle, keyframes } from '@vanilla-extract/css';

export const container = style({
  display: 'none',

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      display: 'block',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: vars.themeColor.color.footerBackground,
      zIndex: 1,
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
    },
  },
});

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const wrapper = style({
  visibility: 'hidden',
  animation: `${fadeOut} 0.5s forwards`,

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      visibility: 'visible',
      transition: 'opacity 0.3s ease-in-out',
      animation: `${fadeIn} 0.5s forwards`,
    },
  },
});

export const ul = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '1rem 0',
  margin: 0,
  listStyle: 'none',
});

export const menuList = style({
  flex: '1 1 33.333%',
  textAlign: 'center',
});

globalStyle(`${menuList} > a`, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: vars.fontSize.small,
  textDecoration: 'none',
});

export const activeIconWrapper = style({
  borderRadius: '33%',
  padding: '6px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.themeColor.color.iconBoxColor,
  marginBottom: '0.75rem',
});

export const hiddenIconWrapper = style({
  borderRadius: '33%',
  padding: '6px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'none',
  marginBottom: '0.75rem',
});

export const icon = style({
  width: '24px',
  height: '24px',
  fill: vars.themeColor.color.iconColor,
});
