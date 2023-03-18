import { styled } from '@/styles'

export const SidebarContainer = styled('aside', {
  background: '$fa100',
  height: '100vh',
  position: 'fixed',
  top: 60,
  left: 0,

  variants: {
    isSidebarOpen: {
      true: {
        width: 240,
        padding: '8px 12px',
      },
      false: {
        width: 72,
        padding: '0 4px',
      }
    }
  }
})

export const SidebarItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: 12,
  cursor: 'pointer',
  color: '$white',

  '&:hover': {
    background: '$fa300'
  },

  '&:active': {
    background: '$fa400'
  },

  span: {
    lineHeight: '14px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '14px',
  },

  variants: {
    isSelected: {
      true: {
        background: '$fa300'
      },
      false: {
        background: '$fa100'
      }
    },
    isSidebarOpen: {
      true: {
        gap: 24,
        padding: '0 12px',
        height: 40,

        span: {
          fontSize: 14,
        },
      },
      false: {
        flexDirection: 'column',
        padding: '16px 0 14px',
        gap: 6,

        span: {
          fontSize: 10,
        },
      }
    }
  }
})
