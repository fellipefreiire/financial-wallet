import { styled } from "@/styles";

export const LayoutContainer = styled('main', {
  marginTop: 60,
  padding: '8px 0 0 20px',
  minHeight: 'calc(100vh - 60px)',
  maxHeight: 'calc(100vh - 60px)',
  display: 'flex',

  variants: {
    isSidebarOpen: {
      true: {
        marginLeft: 72,

        '@media (min-width: 1441px)': {
          marginLeft: 240,
        }
      },
      false: {
        marginLeft: 72,
      }
    }
  }
})