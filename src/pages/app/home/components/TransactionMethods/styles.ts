import { styled } from "@/styles";

export const TransactionMethodsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  overflow: 'hidden',
  height: '100%',
})

export const Cards = styled('div', {
  height: 153,
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  transformStyle: 'preserve-3d',


  // display: 'flex',
})

export const CardDetailContainer = styled('div', {
  padding: 24,
})

export const CardDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  margin: '24px 0',
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