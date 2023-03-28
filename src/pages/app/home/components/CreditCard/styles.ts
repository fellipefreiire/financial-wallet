import { styled } from "@/styles";

export const CreditCardContainer = styled('div', {
  width: 256,
  height: 153,
  background: '#305043',
  borderRadius: 6,
  padding: 16,
  cursor: 'pointer',
  transition: 'transform 1s ease, opacity 0.4s ease',
  position: 'absolute',

  '&[data-position-gt~="3"]': {
    display: 'none',
  },

  '&[data-position="2"]': {
    zIndex: 1,
    transform: 'translateX(0) scale(1)',
    opacity: 1,
  },

  '&[data-position="1"]': {
    transform: 'translateX(-35%) scale(0.8)',
    zIndex: 0,
    opacity: 0.6,
  },

  '&[data-position="3"]': {
    transform: 'translateX(35%) scale(0.8)',
    zIndex: 0,
    opacity: 0.6,
  },

  '&[data-left="false" data-right="false"]': {
    display: 'none'
  },
})