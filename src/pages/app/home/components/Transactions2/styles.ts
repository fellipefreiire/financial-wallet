import { styled } from "@/styles";

export const TransactionsContainer = styled('div', {
  paddingBottom: 12,
})

export const TransactionsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h2: {
    fontWeight: 'normal',
  }
})

export const DatePickerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 80,
  padding: 8,
  border: '1px solid $fa400'
})

export const TransactionsH = styled('div', {
  display: 'flex',
  marginTop: 12,
  border: '1px solid $fa400',
  padding: 12,
  gap: 8,
})

export const TransactionsHI = styled('div', {
  variants: {
    variant: {
      withBorder: {
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: '$fa400'
      }
    },
    spacing: {
      one: {
        flex: 1,
      },
      two: {
        flex: 2,
      }
    }
  }
})

export const TransactionsItemsContainer = styled('div', {
  overflow: 'auto',
  maxHeight: '30vh',
})

export const Row = styled('div', {
  display: 'flex',
})

export const TransactionsItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 24,

  variants: {
    spacing: {
      one: {
        flex: 1,
      },
      two: {
        flex: 2,
      }
    }
  }
})

export const IconWrapper = styled('div', {
  background: '$fa400',
  width: 48,
  height: 48,
  borderRadius: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
