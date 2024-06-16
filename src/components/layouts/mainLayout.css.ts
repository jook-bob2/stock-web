import { vars } from '@/styles/global.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({});

// 컨테이너 내 요소가 선택되었을 때 색상 지정
globalStyle(`${container} ::selection`, {
  backgroundColor: vars.themeColor.color.selectionColor,
  color: vars.color['yellow-200'],
});
