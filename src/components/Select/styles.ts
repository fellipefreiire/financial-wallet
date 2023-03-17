import { styled } from '@/styles'
import * as SelectPrimitive from '@radix-ui/react-select'

export const Trigger = styled(SelectPrimitive.Trigger, {
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  span: {
    color: '#8F8FAB',
    fontSize: 16,
  },
})

export const Content = styled(SelectPrimitive.Content, {
  background: '#383856',
  color: '#8F8FAB',
  borderRadius: 6,
  padding: 16,
  border: '1px solid #8F8FAB',
})

export const Viewport = styled(SelectPrimitive.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  width: 128,
})
