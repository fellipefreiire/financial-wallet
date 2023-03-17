import { styled } from '@/styles'

export const DotsContainer = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  // gap: 2,
  gap: 4,
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const Dot = styled('div', {
  borderRadius: 9999,
  background: 'white',

  variants: {
    variant: {
      sm: {
        width: 4,
        height: 4,
      },

      sm2: {
        width: 4,
        height: 4,
        background: '#8C8DA7',
      },

      md: {
        width: 8,
        height: 8,
      },

      md2: {
        width: 9,
        height: 9,
      },

      lg: {
        width: 15,
        height: 15,
      },
    },
  },
})
