import { styled } from '@/styles'

export const HeaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 32,

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
})

export const Circle = styled('div', {
  width: 44,
  height: 44,
  background: '#373956',
  border: '2px solid #3B3A5A',
  borderRadius: 9999,
  padding: 8,
})
