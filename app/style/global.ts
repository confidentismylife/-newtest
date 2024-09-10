// global.ts
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
});

export default globalStyles;
