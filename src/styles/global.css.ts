import { globalStyle, createThemeContract, createGlobalTheme, createTheme } from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  fontFamily: {
    roboto: 'Roboto, sans-serif',
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
  color: {
    white: {
      default: '#FFFFFF',
      100: '#f2f2f2',
      200: '#e5e5e5',
      300: '#d8d8d8',
    },
    gray: {
      default: '#bcbcbc',
      100: '#afafaf',
      200: '#a2a2a2',
      300: '#959595',
      400: '#5e5e5e',
      500: '#4b4b4b',
    },
    darkGray: {
      default: '#5b5b5b',
      100: '#cdcdcd',
      200: '#adadad',
      300: '#8c8c8c',
      400: '#6b6b6b',
      500: '#484848',
      600: '#2d2d2d',
    },
    red: {
      default: '#f44336',
      100: '#fcd9d6',
      200: '#f9a19a',
      300: '#f77b72',
      400: '#f5554a',
      500: '#db3c30',
    },
    blue: {
      default: '#2986cc',
      100: '#bedaef',
      200: '#94c2e5',
      300: '#69aadb',
      400: '#3e92d1',
      500: '#206ba3',
    },
    darkBlue: {
      default: '#16537e',
      100: '#d0dce5',
      200: '#a1bacb',
      300: '#7397b1',
      400: '#2d648a',
      500: '#114264',
      600: '#082132',
      700: '#041019',
    },
    yellow: {
      default: '#ffd966',
      100: '#fff3d1',
      200: '#ffecb2',
      300: '#ffe493',
      400: '#ffdc75',
      500: '#ccad51',
    },
    green: {
      default: '#8fce00',
      100: '#e8f5cc',
      200: '#d2eb99',
      300: '#bbe166',
      400: '#a5d732',
      500: '#80b900',
    },
    black: {
      default: '#191919',
      100: '#cccccc',
      200: '#999999',
      300: '#666666',
      400: '#4c4c4c',
      500: '#000000',
    },
  },
});

const themeColor = createThemeContract({
  color: {
    mainBackground: null, // 메인 색상
    headerBackground: null, // 헤더 색상
    contentBackground: null, // 컨텐츠 색상
    mainFontColor: null, // 폰트 색상
    borderColor: null, // 테두리 색상
    footerBackground: null, // 푸터 색상
    hoverColor: null, // ::hover 색상
    selectionColor: null, // ::selection 색상
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: global.color.white[100],
    contentBackground: global.color.white[100],
    mainFontColor: global.color.black[500],
    borderColor: global.color.black.default,
    headerBackground: global.color.white[200],
    footerBackground: global.color.white.default,
    hoverColor: global.color.white.default,
    selectionColor: global.color.gray[400],
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: global.color.black.default,
    contentBackground: global.color.darkBlue[700],
    mainFontColor: global.color.white[200],
    borderColor: global.color.white.default,
    headerBackground: global.color.black.default,
    footerBackground: global.color.black.default,
    hoverColor: global.color.gray[200],
    selectionColor: global.color.blue[400],
  },
});

export const vars = { ...global, themeColor };

globalStyle('body', {
  fontSize: global.fontSize.small,
  backgroundColor: `hsl(${vars.themeColor.color.mainBackground})`,
  color: vars.themeColor.color.mainFontColor,
  transition: 'all 0.25s linear',
  cursor: `url('/images/cursor.png'), auto`,
});

globalStyle('button, a', {
  cursor: `url('/images/custom-pointer.png'), auto`,
});
