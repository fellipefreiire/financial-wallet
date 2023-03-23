import { styled } from '@/styles'

export const HomeContainer = styled('div', {
  height: '100%',
  display: 'flex',
  gap: 16,
})

export const CardsWrapper = styled('div', {
  display: 'flex',
  gap: 16,
  flex: 1,
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
  borderRadius: 20,
  padding: 16,
})

export const RightContainer = styled(SideContainers, {
  flex: 1,
})

export const LeftContainer = styled(SideContainers, {
  flex: 2,
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