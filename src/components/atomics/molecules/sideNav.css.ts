import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { style, keyframes } from '@vanilla-extract/css';

/**
 * @desc 사이드메뉴 랩
 */
export const sideMenuWrapper = style({
  padding: '0 0.5rem 0 0.125rem',
  display: 'none',
  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      display: 'block',
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
  padding: '0 1rem',
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
    position: 'absolute',
    top: 0,
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
  top: 0,
  width: '354px',
  height: '100vh',
  backgroundColor: vars.themeColor.color.sideNavBgColor,
  zIndex: 10,
  border: `1px solid ${vars.themeColor.color.sideNavBgColor}`,
});

/**
 * @desc 사이드 네비게이션 헤더
 */
export const sideNavigationHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

/**
 * @desc 사이드 네비게이션 닫기 아이콘 영역
 */
export const sideNavigationCloseArea = style({
  padding: '12px',
});

/**
 * @desc 사이드 네비게이션 닫기 버튼
 */
export const sideNavigationCloseButton = style({
  border: 0,
  backgroundColor: 'transparent',
});

/**
 * @desc 사이드 네비게이션 닫기 아이콘
 */
export const sideNavigationCloseSvg = style({
  width: '18px',
  height: '18px',
  fill: vars.themeColor.color.hamburgerColor,
});
