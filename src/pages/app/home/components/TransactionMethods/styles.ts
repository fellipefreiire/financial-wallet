import { styled } from "@/styles";

export const TransactionMethodsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  height: '100%',
  paddingBottom: 24,
})

export const Cards = styled('div', {
  height: 'calc(14.5625vw + 64px)',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  transformStyle: 'preserve-3d',
  background: '$fa200',
  padding: '32px 0',

  // display: 'flex',
})

export const CardDetailContainer = styled('div', {
  padding: 24,
})

export const CardDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 24,
})

export const IconWrapper = styled('div', {
  background: '$fa400',
  width: 36,
  height: 36,
  borderRadius: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
})

export const InfoWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,

  button: {
    width: '100%',
    padding: 12,
    cursor: 'pointer',
  }
})

export const ChartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ChartController = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  button: {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    width: 32,
    height: 32,
    cursor: 'pointer',

    '&:hover': {
      background: '$fa300'
    },

    '&:active': {
      background: '$fa400'
    },
  }
})