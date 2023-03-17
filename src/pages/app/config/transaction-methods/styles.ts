import { styled } from '@/styles'

export const CategoriesContainer = styled('main', {
  padding: 24,
})

export const BackButton = styled('button', {
  unset: 'all',
  width: 44,
  height: 44,
  background: 'transparent',
  border: 0,
  marginBottom: 24,
})

export const CategoryList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  h1: {
    fontSize: 20,
  },
})

export const Category = styled('div', {
  display: 'flex',
  background: '#383856',
  padding: 16,
  borderRadius: 10,
  justifyContent: 'space-between',
  alignItems: 'center',

  '> div': {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },

  '> span': {
    fontSize: 14,
    color: '#8F8FAB',
  },

  '&[data-active="inactive"]': {
    filter: 'brightness(0.8)',
  },
})

export const AddButton = styled('button', {
  unset: 'all',
  position: 'fixed',
  bottom: 32,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 60,
  height: 60,
  borderRadius: 9999,
  border: '3px solid #3C4166',
  background: '#FD773C',
})

export const CreateCategoryContainer = styled('div', {
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

export const IconSelector = styled('div', {
  background: '#3C4166',
  border: '1px dashed #6886D5',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
})
