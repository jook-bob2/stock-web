import { recipe } from '@vanilla-extract/recipes';
import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { COLORS } from '@/constants/colors';

export type Intent =
  | 'contentBackground'
  | 'white'
  | 'whiteYellow'
  | 'yellow'
  | 'whiteBlue'
  | 'bluePurple'
  | 'lightBlue'
  | 'lightGray'
  | 'whiteGray'
  | 'darkGray'
  | 'lime'
  | 'lightRed'
  | 'pink'
  | 'red'
  | 'black';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

const themeContract = createThemeContract({
  colors: {
    contentBackground: null,
    white: null,
    whiteYellow: null,
    yellow: null,
    whiteBlue: null,
    bluePurple: null,
    lightBlue: null,
    lightGray: null,
    whiteGray: null,
    darkGray: null,
    lime: null,
    lightRed: null,
    pink: null,
    red: null,
    black: null,
    text: null,
  },
});

/**
 * @description 밝은 테마
 */
export const lightTheme = createTheme(themeContract, {
  colors: {
    contentBackground: COLORS['white-75'],
    white: COLORS['white-50'],
    whiteYellow: COLORS['yellow-100'],
    yellow: COLORS['yellow-300'],
    whiteBlue: COLORS['blue-200'],
    bluePurple: COLORS['violet-400'],
    lightBlue: COLORS['sky-300'],
    lightGray: COLORS['gray-300'],
    whiteGray: COLORS['neutral-100'],
    darkGray: COLORS['gray-400'],
    lime: COLORS['lime-400'],
    lightRed: COLORS['red-200'],
    pink: COLORS['pink-300'],
    red: COLORS['red-500'],
    black: COLORS['black-500'],
    text: COLORS['black-50'],
  },
});

/**
 * @description 어두운 테마
 */
export const darkTheme = createTheme(themeContract, {
  colors: {
    contentBackground: COLORS['black-75'],
    white: COLORS['slate-500'],
    whiteYellow: COLORS['yellow-700'],
    yellow: COLORS['yellow-900'],
    whiteBlue: COLORS['sky-500'],
    bluePurple: COLORS['violet-800'],
    lightBlue: COLORS['blue-700'],
    lightGray: COLORS['slate-500'],
    whiteGray: COLORS['gray-500'],
    darkGray: COLORS['gray-800'],
    lime: COLORS['lime-700'],
    lightRed: COLORS['red-600'],
    pink: COLORS['pink-600'],
    red: COLORS['red-800'],
    black: COLORS['black-400'],
    text: COLORS['white-100'],
  },
});

/**
 * @description 버튼 Recipe
 */
export const button = recipe({
  base: {
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    fontWeight: 'bold',
  },

  variants: {
    intent: {
      contentBackground: { backgroundColor: themeContract.colors.contentBackground, color: themeContract.colors.text },
      white: { backgroundColor: themeContract.colors.white, color: themeContract.colors.text },
      whiteYellow: { backgroundColor: themeContract.colors.whiteYellow, color: themeContract.colors.text },
      yellow: { backgroundColor: themeContract.colors.yellow, color: themeContract.colors.text },
      whiteBlue: { backgroundColor: themeContract.colors.whiteBlue, color: themeContract.colors.text },
      bluePurple: { backgroundColor: themeContract.colors.bluePurple, color: themeContract.colors.white },
      lightBlue: { backgroundColor: themeContract.colors.lightBlue, color: themeContract.colors.text },
      lightGray: { backgroundColor: themeContract.colors.lightGray, color: themeContract.colors.text },
      whiteGray: { backgroundColor: themeContract.colors.whiteGray, color: themeContract.colors.text },
      darkGray: { backgroundColor: themeContract.colors.darkGray, color: themeContract.colors.white },
      lime: { backgroundColor: themeContract.colors.lime, color: themeContract.colors.text },
      lightRed: { backgroundColor: themeContract.colors.lightRed, color: themeContract.colors.text },
      pink: { backgroundColor: themeContract.colors.pink, color: themeContract.colors.text },
      red: { backgroundColor: themeContract.colors.red, color: themeContract.colors.white },
      black: { backgroundColor: themeContract.colors.black, color: themeContract.colors.white },
    },
    size: {
      XS: { fontSize: '12px', padding: '4px 8px' },
      S: { fontSize: '14px', padding: '6px 12px' },
      M: { fontSize: '16px', padding: '8px 18px' },
      L: { fontSize: '18px', padding: '10px 22px' },
      XL: { fontSize: '20px', padding: '12px 26px' },
    },
  },

  defaultVariants: {
    intent: 'contentBackground',
    size: 'M',
  },
});
