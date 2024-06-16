import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { COLORS } from '@/constants/colors';

const { MOBILE, DESKTOP, LAPTOP, SMALL_TABLET, TABLET } = MEDIA_QUERY;

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
};

/**
 * @description 공통 사이즈
 */
const commonSizes = {
  screen: {
    vh: '100vh',
    vw: '100vw',
  },
  full: '100%',
  half: '50%',
  quarter: '25%',
  '3/4': '75%',
  auto: 'auto',
  fixed: {
    '100': '100px',
    '200': '200px',
  },
  fraction: {
    '1/3': '33.3333%', // test
    '2/3': '66.6667%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.6667%',
    '5/6': '83.3333%',
    '1/12': '8.3333%',
    '11/12': '91.6667%',
  },
};

/**
 * @description 사이즈들
 */
const sizes = {
  h: {
    screen: commonSizes.screen.vh,
    full: commonSizes.full,
    half: commonSizes.half,
    quarter: commonSizes.quarter,
    '3/4': commonSizes['3/4'],
    auto: commonSizes.auto,
    ...commonSizes.fixed,
    ...commonSizes.fraction,
  },
  w: {
    screen: commonSizes.screen.vw,
    full: commonSizes.full,
    half: commonSizes.half,
    quarter: commonSizes.quarter,
    '3/4': commonSizes['3/4'],
    auto: commonSizes.auto,
    ...commonSizes.fixed,
    ...commonSizes.fraction,
  },
  minH: {
    full: commonSizes.full,
    screen: commonSizes.screen.vh,
    half: commonSizes.half,
    ...commonSizes.fixed,
    ...commonSizes.fraction,
  },
  maxH: {
    full: commonSizes.full,
    screen: commonSizes.screen.vh,
    half: commonSizes.half,
    ...commonSizes.fixed,
    ...commonSizes.fraction,
  },
  minW: {
    full: commonSizes.full,
    screen: commonSizes.screen.vw,
    half: commonSizes.half,
    ...commonSizes.fixed,
    ...commonSizes.fraction,
  },
  maxW: {
    full: commonSizes.full,
    screen: commonSizes.screen.vw,
    half: commonSizes.half,
    ...commonSizes.fixed,
    ...commonSizes.fraction,
  },
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: { '@media': MOBILE },
    smallTablet: { '@media': SMALL_TABLET },
    tablet: { '@media': TABLET },
    laptop: { '@media': LAPTOP },
    desktop: { '@media': DESKTOP },
  },
  defaultCondition: 'desktop',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    height: sizes.h,
    maxHeight: sizes.maxH,
    minHeight: sizes.minH,
    width: sizes.w,
    maxWidth: sizes.maxW,
    minWidth: sizes.minW,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      '@media': '(prefers-color-scheme: light)',
    },
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
    },
  },
  defaultCondition: ['lightMode', 'darkMode'],
  properties: {
    color: COLORS,
    background: COLORS,
    backgroundColor: COLORS,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
