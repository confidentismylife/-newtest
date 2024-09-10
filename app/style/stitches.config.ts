// stitches.config.ts
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: '#ff0000',
      secondary: '#00ff00',
    },
    space: {
      small: '8px',
      medium: '16px',
      large: '24px',
    },
    fontSizes: {
      small: '12px',
      medium: '16px',
      large: '20px',
    },
  },
});
