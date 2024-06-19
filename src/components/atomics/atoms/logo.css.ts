import { style } from '@vanilla-extract/css';

/**
 * @desc 컨테이너
 */
export const container = style({
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: 1,
});
