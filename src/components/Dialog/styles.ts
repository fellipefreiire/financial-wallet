import { styled } from '@/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
  background: '#000',
  position: 'fixed',
  inset: 0,
  opacity: 0.4,
})

export const DialogTrigger = styled(DialogPrimitive.Trigger, {
  all: 'unset',
})
