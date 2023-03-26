import { styled } from '@/styles'

export const CardContainer = styled('div', {
  background: '$fa300',
  flex: 1,
  borderRadius: 6,
  padding: 16,
})

export const Teste2 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const Teste3 = styled('div', {
  background: 'black',
  width: 24,
  height: 24,
  borderRadius: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Teste4 = styled('div', {
  h3: {
    fontWeight: 'normal',
    fontSize: 18,
    marginBottom: 4,
  },

  span: {
    fontSize: 14,
  }
})