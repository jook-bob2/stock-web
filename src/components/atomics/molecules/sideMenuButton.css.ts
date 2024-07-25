import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const buttonContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100px',
  display: 'flex',
  visibility: 'visible',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.3s ease-in-out',
  animation: `${fadeIn} 0.5s forwards`,
  zIndex: 2,

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      visibility: 'hidden',
      animation: `${fadeOut} 0.5s forwards`,
    },
  },
});

/**
 * @desc 메뉴 아이콘 색상
 */
export const menuIcon = style({
  color: vars.themeColor.color.hamburgerColor,
});

/**
 * @desc 햄버거 버튼
 */
export const sideNavButton = style({
  border: 0,
  backgroundColor: 'transparent',
  margin: '1.25rem',
});
