import { styled } from '@/styles'

export const HeaderContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: 60,
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
})

export const ButtonContainer = styled('div', {
  width: 40,
  height: 40,
  padding: 8,
  borderRadius: 9999,
  cursor: 'pointer',

  '&:hover': {
    background: '$fa300'
  },

  '&:active': {
    background: '$fa400'
  },

  button: {
    all: 'unset',
  }
})