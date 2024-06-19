import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',

  '@media': {
    [`${MEDIA_QUERY.MAX_TABLET}`]: {
      display: 'none',
    },
  },
});

export const parentUl = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const parentLi = style({
  margin: '0 0.75rem',
});

export const parentLink = style({
  color: vars.themeColor.color.mainFontColor,
  padding: '0.25rem 0.5rem',
  fontWeight: vars.fontWeight.normal,
  fontSize: vars.fontSize.regular,
  ':hover': {
    fontWeight: vars.fontWeight.large,
    backgroundColor: vars.themeColor.color.hoverColor,
    borderStyle: 'solid',
    borderRadius: '1rem',
  },
});
