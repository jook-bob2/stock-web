import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  sprinkles({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 'screen',
    height: 'full',
  }),
  {
    backgroundColor: vars.themeColor.color.mainBackground,
  },
]);

// globalStyle(`${container} > p`, {
//   fontSize: vars.fontSize.medium,
//   lineHeight: 1.8,
//   color: vars.color['blue-400'],
// });
