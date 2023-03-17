import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { DialogContentProps } from '@radix-ui/react-dialog'

import * as S from './styles'

interface IDialogContentProps extends DialogContentProps {
  children: React.ReactNode
}

export const DialogContent = React.forwardRef(
  (
    { children, ...props }: IDialogContentProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) => (
    <DialogPrimitive.Portal>
      <S.DialogOverlay />
      <DialogPrimitive.Content {...props} ref={forwardedRef}>
        {children}
        {/* <DialogPrimitive.Close aria-label="Close"> */}
        {/* <Cross1Icon /> */}
        {/* </DialogPrimitive.Close> */}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
)

DialogContent.displayName = 'Dialog'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = S.DialogTrigger
