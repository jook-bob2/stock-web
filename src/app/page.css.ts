import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/global.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const container = style([
  {
    backgroundColor: vars.themeColor.color.mainBackground,
  },
  sprinkles({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 'screen',
    height: 'full',
  }),
]);

globalStyle(`${container} > p`, {
  fontSize: vars.fontSize.medium,
  lineHeight: 1.8,
  color: vars.color['blue-400'],
});
