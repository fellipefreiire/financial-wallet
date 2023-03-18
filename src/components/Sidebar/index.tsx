import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChartPie, Receipt, Wrench } from 'phosphor-react'

import * as S from './styles'

interface SidebarProps {
  isSidebarOpen: boolean
}

export function Sidebar({ isSidebarOpen }: SidebarProps) {
  const router = useRouter()

  return (
    <Collapsible.Content asChild forceMount>
      <S.SidebarContainer isSidebarOpen={isSidebarOpen}>
        <Link href='/app/home' style={{ textDecoration: 'none' }}>
          <S.SidebarItem isSidebarOpen={isSidebarOpen} isSelected={router.pathname === '/app/home' && isSidebarOpen}>
            <ChartPie size={24} weight='fill' />
            <span>Dashboard</span>
          </S.SidebarItem>
        </Link>
        <Link href='/app/reports' style={{ textDecoration: 'none' }}>
          <S.SidebarItem isSidebarOpen={isSidebarOpen} isSelected={router.pathname === '/app/reports' && isSidebarOpen}>
            <Receipt size={24} weight='regular' />
            <span>Reports</span>
          </S.SidebarItem>
        </Link>
        <Link href='/app/config' style={{ textDecoration: 'none' }}>
          <S.SidebarItem isSidebarOpen={isSidebarOpen} isSelected={router.pathname === '/app/config' && isSidebarOpen}>
            <Wrench size={24} weight='regular' />
            <span>Config</span>
          </S.SidebarItem>
        </Link>
      </S.SidebarContainer>
    </Collapsible.Content>
  )
}
