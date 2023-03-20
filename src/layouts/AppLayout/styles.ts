import { styled } from "@/styles";

export const LayoutContainer = styled('main', {
  marginTop: 60,
  padding: '12px 20px',
  height: 'calc(100vh - 60px)',

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