import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from "react";

import * as S from './styles'

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
    >
      <Header />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <S.LayoutContainer isSidebarOpen={isSidebarOpen}>{children}</S.LayoutContainer>
    </Collapsible.Root >
  )
}