import { styled } from '@/styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  gap: 16,
  flex: '0 1 auto',
  width: '100%',
})

export const CardsWrapper = styled('div', {
  display: 'flex',
  gap: 16,
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  variants: {
    side: {
      left: {
        flex: 3,
      },
      right: {
        flex: 2,
      }
    }
  }
})

const SideContainers = styled('div', {
  // background: '$fa300',
  // borderRadius: 20,
  // padding: 16,
  // minHeight: 350,
})

export const RightContainer = styled(SideContainers, {
  height: '100%',
  borderLeftWidth: 1,
  borderLeftColor: '$fa400',
  borderLeftStyle: 'solid'
})

export const LeftContainer = styled(SideContainers, {
  flex: 2,
  // maxHeight: '41vh'
})

export const GraphContainer = styled('div', {
  flex: 2,
  // maxHeight: '41vh',
  display: 'flex',
  flexDirection: 'column'
})

export const GraphController = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 8,
})

export const Title = styled('h2', {
  fontSize: 24,
  fontWeight: 'normal',
})

export const GraphControllerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  button: {
    all: 'unset',
    width: 20,
    height: 20,
    cursor: 'pointer',
  }
})

export const GraphControllerDates = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  div: {
    width: 8,
    height: 1,
    background: '$white',
  }
})