import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style, globalStyle } from '@vanilla-extract/css';

/**
 * @desc 사이드메뉴 랩
 */
export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100px',
  backgroundColor: vars.themeColor.color.mainBackground,
  transition: 'transform 0.3s ease-in-out',
  zIndex: 1,
  borderTopRightRadius: '30px',
  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      display: 'none',
    },
  },
});

export const activeMenu = style({
  transform: 'translateX(0)',
  opacity: 1,
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
});

export const hideMenu = style({
  transform: 'translateX(-100%)',
  opacity: 0,
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
});

export const menuListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  paddingTop: '73px',
  boxSizing: 'border-box',

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      paddingTop: '0',
    },
  },
});

export const menuList = style({
  margin: '32px 0',
});

globalStyle(`${menuList} > a`, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: vars.fontSize.small,
});

export const icon = style({
  width: '24px',
  height: '24px',
  fill: vars.themeColor.color.hamburgerColor,
});
