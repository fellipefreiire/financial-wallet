import { styled } from "@/styles";

export const LayoutContainer = styled('main', {
  marginTop: 60,

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