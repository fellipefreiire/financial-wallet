import { styled } from "@/styles";

export const CreditCardContainer = styled('div', {
  width: '25vw', // 460 300
  height: '14.5625vw', // 240
  background: 'linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%)',
  borderRadius: 30,
  cursor: 'pointer',
  transition: 'transform 1s ease, opacity 0.4s ease',
  position: 'absolute',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 16,

  '@media (min-width: 1441px)': {
    padding: 24,
  },

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      fontSize: 16,

      '@media (min-width: 1441px)': {
        fontSize: 24,
      }
    },

    img: {
      width: 60,
      '@media (min-width: 1441px)': {
        width: 80
      }
    }
  },

  '&:before': {
    content: '',
    width: '25.47625vw',
    height: '17.88635vw',
    background: 'black',
    top: 0,
    right: 0,
    position: 'absolute',
    opacity: 0.08,
    borderRadius: '50%',
    transform: 'translate(42%, -64%)',
  },

  '&:after': {
    content: '',
    width: '25.47625vw',
    height: '17.88635vw',
    background: 'black',
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0.08,
    borderRadius: '50%',
    transform: 'translate(-42%, 64%)',
  },

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