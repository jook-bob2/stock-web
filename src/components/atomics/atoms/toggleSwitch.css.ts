import { vars } from '@/styles/global.css';
import { style } from '@vanilla-extract/css';

export const toggleContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const toggleSwitch = style({
  position: 'relative',
  width: '60px',
  height: '30px',
  backgroundColor: vars.color['white-100'],
  borderRadius: '30px',
  borderStyle: 'none',
  transition: 'background-color 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const toggleSlider = style({
  position: 'absolute',
  width: '26px',
  height: '26px',
  backgroundColor: 'none',
  borderRadius: '50%',
  top: '2px',
  left: '2px',
  transition: 'transform 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const toggleChecked = style({
  backgroundColor: vars.color['gray-600'],
});

export const sliderChecked = style({
  transform: 'translateX(30px)',
});
