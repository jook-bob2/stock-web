import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  top: 0,
  left: 14,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: 1,
});
