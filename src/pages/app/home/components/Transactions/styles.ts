import { styled } from '@/styles'

export const TransactionsContainer = styled('main', {})

export const TransactionsHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 32,
  marginBottom: 24,

  span: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})

export const Transactions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  maxHeight: '27vh',
  overflowY: 'auto',
})

export const Transaction = styled('div', {
  padding: 8,
  background: '#2D2D44',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: 12,
})

export const Description = styled('div', {
  display: 'flex',
  gap: 8,
})

export const IconWrapper = styled('div', {
  width: 44,
  height: 44,
  background: '#383855',
  borderRadius: 8,
  padding: 10,
})

export const DescriptionInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '&[data-hide="true"]': {
    gap: 8,
  },

  '&[data-hide="false"]': {
    gap: 0,
  },

  span: {
    '&[data-type="item"]': {
      fontSize: 16,
    },

    '&[data-type="purchase-method"]': {
      fontSize: 14,
      color: '#8C8DA7',
    },
  },
})

export const DescriptionValues = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',

  '&[data-hide="true"]': {
    gap: 8,
  },

  '&[data-hide="false"]': {
    gap: 0,
  },

  span: {
    '&[data-type="value"]': {
      fontSize: 16,
    },

    '&[data-type="time"]': {
      fontSize: 14,
      color: '#8C8DA7',
    },
  },
})
