import { COLORS } from '@/constants/colors';
import { globalStyle, createGlobalThemeContract, createGlobalTheme, createTheme } from '@vanilla-extract/css';

const toTitleCase = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

export const vars = createGlobalThemeContract(
  {
    color: {
      ...COLORS,
    },
    themeColor: {
      color: {
        mainBackground: null, // 메인 색상
        headerBackground: null, // 헤더 색상
        contentBackground: null, // 컨텐츠 색상
        mainFontColor: null, // 폰트 색상
        borderColor: null, // 테두리 색상
        footerBackground: null, // 푸터 색상
        hoverColor: null, // ::hover 색상
        selectionColor: null, // ::selection 색상
        iconColor: null, // 햄버거 색상
        sideNavBgColor: null, // 사이드 메뉴 색상
        iconBoxColor: null, // 아이콘을 감싸는 박스 색상
      },
    },
    fontSize: {
      xLarge: '48px',
      large: '36px',
      medium: '28px',
      regular: '18px',
      small: '16px',
      micro: '14px',
    },
    fontWeight: {
      small: '100',
      normal: '400',
      large: '700',
      xLarge: '900',
    },
  },
  (_value, path) => `${path.map(toTitleCase).join('')}`,
);

createGlobalTheme(':root', vars, {
  color: {
    ...COLORS,
  },
  themeColor: {
    color: {
      mainBackground: vars.color['pink-50'],
      contentBackground: vars.color['white-50'],
      mainFontColor: vars.color['black-500'],
      borderColor: vars.color['black-50'],
      headerBackground: vars.color['pink-50'],
      footerBackground: vars.color['pink-50'],
      hoverColor: vars.color['white-50'],
      selectionColor: vars.color['gray-400'],
      iconColor: vars.color['stone-800'],
      sideNavBgColor: vars.color['zinc-300'],
      iconBoxColor: vars.color['violet-100'],
    },
  },
  fontSize: {
    xLarge: '48px',
    large: '36px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    micro: '14px',
  },
  fontWeight: {
    small: '100',
    normal: '400',
    large: '700',
    xLarge: '900',
  },
});

export const lightTheme = createTheme(vars.themeColor, {
  color: {
    mainBackground: vars.color['pink-50'],
    contentBackground: vars.color['white-50'],
    mainFontColor: vars.color['black-500'],
    borderColor: vars.color['black-50'],
    headerBackground: vars.color['pink-50'],
    footerBackground: vars.color['pink-50'],
    hoverColor: vars.color['white-50'],
    selectionColor: vars.color['gray-400'],
    iconColor: vars.color['stone-800'],
    sideNavBgColor: vars.color['zinc-300'],
    iconBoxColor: vars.color['violet-100'],
  },
});

export const darkTheme = createTheme(vars.themeColor, {
  color: {
    mainBackground: vars.color['zinc-800'],
    contentBackground: vars.color['slate-700'],
    mainFontColor: vars.color['white-200'],
    borderColor: vars.color['white-50'],
    headerBackground: vars.color['zinc-800'],
    footerBackground: vars.color['zinc-800'],
    hoverColor: vars.color['gray-700'],
    selectionColor: vars.color['blue-400'],
    iconColor: vars.color['neutral-100'],
    sideNavBgColor: vars.color['zinc-700'],
    iconBoxColor: vars.color['zinc-950'],
  },
});

globalStyle('body', {
  fontSize: vars.fontSize.small,
  backgroundColor: vars.themeColor.color.mainBackground,
  color: vars.themeColor.color.mainFontColor,
  transition: 'all 0.25s linear',
  cursor: `url('/images/cursor.png'), auto`,
});

globalStyle('button, a', {
  cursor: `url('/images/custom-pointer.png'), auto`,
});
