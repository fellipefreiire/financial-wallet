import { styled } from "@/styles";

export const LayoutContainer = styled('main', {
  marginTop: 60,
  padding: '8px 20px 12px',
  minHeight: 'calc(100vh - 60px)',
  display: 'flex',

  variants: {
    isSidebarOpen: {
      true: {
        marginLeft: 240,
      },
      false: {
        marginLeft: 72,
      }
    }
  }
})