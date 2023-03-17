import { styled } from '@/styles'

export const ConfigContainer = styled('main', {
  padding: 24,
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 32,

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
})

export const Circle1 = styled('div', {
  width: 44,
  height: 44,
  background: '#373956',
  border: '2px solid #3B3A5A',
  borderRadius: 9999,
  padding: 8,
})

export const ConfigOptions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 22,

  a: {
    textDecoration: 'none',
  },
})

export const Option = styled('div', {
  padding: '16px 0',
  background: '#383856',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 24,
  width: 160,

  '> div': {
    background: '#3C4166',
    padding: '20px 24px',
    borderRadius: 20,
  },

  span: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
})
