import { styled } from '@/styles'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderRadius: 20,
  overflow: 'hidden',

  '> div': {
    display: 'flex',
    padding: 16,
    height: 108,
  },

  span: {
    '&[data-type="text"]': {
      fontSize: 14,
      color: '#8F8FAB',
    },

    '&[data-type="top-value"]': {
      fontSize: 40,
      fontWeight: 'bold',
    },

    '&[data-type="bottom-value"]': {
      fontSize: 20,
      fontWeight: 'bold',
    },
  },

  '&:before': {
    content: '',
    position: 'absolute',
    borderRadius: 99999,
    top: '5.99%',
    right: '7.89%',
    bottom: '9.22%',
    left: '7.89%',
    margin: 'auto',
    width: 250,
    height: 184,
    boxShadow: '0px 20px 30px 15px rgba(220, 87, 73, 0.15)',
    zIndex: -1,
  },
})

export const CardTop = styled('div', {
  background: '#383856',
  flexDirection: 'column',

  '&[data-hide="true"]': {
    gap: 8,
  },

  '&[data-hide="false"]': {
    gap: 0,
  },
})

export const CardBottom = styled('div', {
  background: '#2D2D46',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  position: 'relative',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const IncomeContainer = styled('div', {
  alignItems: 'flex-start',

  '&[data-hide="true"]': {
    gap: 15,
  },

  '&[data-hide="false"]': {
    gap: 0,
  },
})

export const OutcomeContainer = styled('div', {
  alignItems: 'flex-end',

  '&[data-hide="true"]': {
    gap: 15,
  },

  '&[data-hide="false"]': {
    gap: 0,
  },
})

export const Separator = styled('div', {
  position: 'absolute',
  height: 12,
  width: 1,
  background: '#E4594A',
  left: 'calc(50% - 1px)',
  bottom: 22,
})
