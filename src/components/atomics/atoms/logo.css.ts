import { vars } from '@/styles/global.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { style, keyframes } from '@vanilla-extract/css';

/**
 * @desc 컨테이너
 */
export const container = style({
  position: 'absolute',
  top: 0,
  left: '0.875rem',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: 1,
});

/**
 * @desc 사이드메뉴 랩
 */
export const sideMenuWrapper = style([
  sprinkles({
    display: {
      mobile: 'block',
      tablet: 'none',
    },
  }),
  {
    padding: '0 0.5rem 0 0.125rem',
  },
]);

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
});

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

/**
 * @desc 사이드메뉴 네비게이션 컨테이너
 */
export const sideNavigationContainer = style([
  {
    position: 'relative',
    transition: 'opacity 0.3s ease-in-out',
  },
  sprinkles({
    display: {
      mobile: 'block',
      tablet: 'none',
    },
  }),
]);

export const menuVisible = style({
  animation: `${fadeIn} 0.3s forwards`,
  zIndex: 10,
});

export const menuHidden = style({
  animation: `${fadeOut} 0.3s forwards`,
  zIndex: 0,
});

/**
 * @desc 사이드메뉴 네비게이션 랩
 */
export const sideNavigationWrapper = style({
  position: 'absolute',
  left: 0,
  top: '-36px',
  width: '354px',
  height: '100vh',
  backgroundColor: vars.themeColor.color.sideNavBgColor,
  zIndex: 10,
  border: `1px solid ${vars.themeColor.color.sideNavBgColor}`,
});

/**
 * @desc
 */
export const sideNavigationHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const sideNavigationClose = style({
  padding: '12px',
});

export const sideNavigationCloseButton = style({
  border: 0,
  backgroundColor: 'transparent',
});

export const sideNavigationCloseSvg = style({
  width: '18px',
  height: '18px',
  fill: vars.themeColor.color.hamburgerColor,
});
