import React from 'react'
import * as S from './styles'
import * as SelectPrimitive from '@radix-ui/react-select'
// import {
//   CheckIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
// } from '@radix-ui/react-icons';
import { SelectProps, SelectItemProps } from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

interface ISelectProps extends SelectProps {
  children: React.ReactNode
}

interface ISelectItemProps extends SelectItemProps {
  children: React.ReactNode
}

export const Select = React.forwardRef(
  (
    { children, ...props }: ISelectProps,
    forwardedRef: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <SelectPrimitive.Root {...props}>
        <S.Trigger ref={forwardedRef}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <CaretDown size={24} color="white" />
          </SelectPrimitive.Icon>
        </S.Trigger>
        <SelectPrimitive.Portal>
          <S.Content position="popper" collisionPadding={26}>
            <SelectPrimitive.ScrollUpButton>
              {/* <ChevronUpIcon /> */}
            </SelectPrimitive.ScrollUpButton>
            <S.Viewport>{children}</S.Viewport>
            <SelectPrimitive.ScrollDownButton>
              {/* <ChevronDownIcon /> */}
            </SelectPrimitive.ScrollDownButton>
          </S.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  },
)

Select.displayName = 'Select'

export const SelectItem = React.forwardRef(
  (
    { children, ...props }: ISelectItemProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <SelectPrimitive.Item {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          {/* <CheckIcon /> */}
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  },
)

SelectItem.displayName = 'Select Item'
