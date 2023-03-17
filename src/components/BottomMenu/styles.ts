import { styled } from '@/styles'

export const BottomMenuContainer = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '0 24px',
  background: '#353452',
  display: 'flex',
  justifyContent: 'space-between',
  borderTopWidth: 1,
  borderColor: '#42425F',
  borderTopStyle: 'solid',

  '> div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    padding: '12px 0',

    div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 44,
      height: 44,
      position: 'relative',
      color: 'white',

      '&[data-type="add-button"]': {
        width: 60,
        height: 60,
      },

      '&[data-active="true"]': {
        '&:before': {
          position: 'absolute',
          top: -12,
          content: '',
          borderTopWidth: 2,
          borderTopStyle: 'solid',
          borderColor: '#E4594A',
          zIndex: 5,
          height: 44,
          width: 44,
        },

        '&:after': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          content: '',
          width: 1,
          height: 1,
          boxShadow: '0px 0px 40px 10px #FD773C',
        },
      },
    },
  },
})

export const AddButton = styled('div', {
  height: 80,
  width: 80,
  background: '#353452',
  borderRadius: 9999,
  position: 'absolute',
  left: '50%',
  top: -24,
  transform: 'translateX(-50%)',

  div: {
    margin: 'auto',
    marginTop: 10,
    height: 60,
    width: 60,
    background: '#FD773C',
    borderRadius: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const AddTransactionContainer = styled('div', {
  padding: 24,
  background: '#383856',
  position: 'fixed',
  bottom: 0,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  div: {
    '&[data-type="input"]': {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: '100%',
    },

    '&[data-type="split"]': {
      display: 'flex',
      gap: 16,
      marginTop: 8,
    },

    '&[data-type="button"]': {
      display: 'flex',
      gap: 16,
      marginTop: 32,

      button: {
        all: 'unset',
        width: '100%',
        padding: 12,
        fontSize: 20,
        borderRadius: 8,
        textAlign: 'center',

        '&[data-type="add"]': {
          background: '#BBF7D0',
          color: '#22C55E',
        },

        '&[data-type="cancel"]': {
          background: '#FECACA',
          color: '#EF4444',
        },
      },
    },
  },

  span: {
    fontSize: 18,
  },

  input: {
    height: 32,
    borderRadius: 6,
    width: '100%',
  },
})
