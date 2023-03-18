import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      fa100: '#28293F',
      fa200: '#2D2D46',
      fa300: '#383856',
      fa400: '#4E4E6B',
      fa500: '#8F8FAB',
      fa600: '#FD773C',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
