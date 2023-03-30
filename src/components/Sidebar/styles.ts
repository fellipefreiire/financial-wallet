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

export const SidebarMinorContainer = styled('aside', {
  background: '$fa100',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '8px 12px',
  width: 240,
  transition: 'all .4s ease',
  zIndex: 11,

  variants: {
    isSidebarOpen: {
      true: {
        transform: 'translateX(0%)'
      },
      false: {
        transform: 'translateX(-100%)'
      }
    }
  }
})

export const SidebarMinorHeader = styled('div', {
  marginBottom: 16,
  marginLeft: 4,
})

export const ButtonContainer = styled('div', {
  width: 40,
  height: 40,
  padding: 8,
  borderRadius: 9999,
  cursor: 'pointer',

  '&:hover': {
    background: '$fa300'
  },

  '&:active': {
    background: '$fa400'
  },

  button: {
    all: 'unset',
  }
})

export const SidebarMinorItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: 12,
  cursor: 'pointer',
  color: '$white',
  gap: 24,
  padding: '0 12px',
  height: 40,

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
    fontSize: 14,
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
  }
})

export const Overlay = styled('div', {
  position: 'absolute',
  inset: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 10,
  background: 'rgba(0,0,0,0.4)',
  transition: 'all .4s ease',

  variants: {
    isSidebarOpen: {
      true: {
        display: 'block',
        opacity: 1,
      },
      false: {
        display: 'none',
        opacity: 0,
      }
    }
  }
})
