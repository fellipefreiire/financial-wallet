import { styled } from '@/styles'

export const CardContainer = styled('div', {
  background: '$fa300',
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 20,
  padding: 16,
})

export const Teste = styled('div', {
  position: 'absolute',
  top: '-16%',
  opacity: 0.05,
  right: '-40%',
  width: '115%',
  height: '115%',

  svg: {
    width: '115%',
    height: '115%',
  }
})