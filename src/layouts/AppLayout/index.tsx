import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import * as Collapsible from '@radix-ui/react-collapsible'
import { useEffect, useState } from "react";

import * as S from './styles'

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [windowSize, setWindowSize] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(windowSize > 1440)

  useEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  return (
    <Collapsible.Root
      defaultOpen={windowSize > 1440}
      onOpenChange={setIsSidebarOpen}
    >
      <Header />
      <Sidebar isSidebarOpen={isSidebarOpen} windowSize={windowSize} />
      <S.LayoutContainer isSidebarOpen={isSidebarOpen}>{children}</S.LayoutContainer>
    </Collapsible.Root >
  )
}