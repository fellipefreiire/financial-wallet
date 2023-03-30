import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChartPie, Receipt, Wrench } from 'phosphor-react'
import { List } from 'phosphor-react'

import * as S from './styles'

interface SidebarProps {
  isSidebarOpen: boolean
  windowSize: number
}

export function Sidebar({ isSidebarOpen, windowSize }: SidebarProps) {
  const router = useRouter()

  return (
    <Collapsible.Content asChild forceMount>
      <>
        <S.SidebarContainer isSidebarOpen={isSidebarOpen && windowSize > 1440}>
          <Link href='/app/home' style={{ textDecoration: 'none' }}>
            <S.SidebarItem isSidebarOpen={isSidebarOpen && windowSize > 1440} isSelected={router.pathname === '/app/home' && isSidebarOpen && windowSize > 1440}>
              <ChartPie size={24} weight='fill' />
              <span>Dashboard</span>
            </S.SidebarItem>
          </Link>
          <Link href='/app/reports' style={{ textDecoration: 'none' }}>
            <S.SidebarItem isSidebarOpen={isSidebarOpen && windowSize > 1440} isSelected={router.pathname === '/app/reports' && isSidebarOpen && windowSize > 1440}>
              <Receipt size={24} weight='regular' />
              <span>Reports</span>
            </S.SidebarItem>
          </Link>
          <Link href='/app/config' style={{ textDecoration: 'none' }}>
            <S.SidebarItem isSidebarOpen={isSidebarOpen && windowSize > 1440} isSelected={router.pathname === '/app/config' && isSidebarOpen && windowSize > 1440}>
              <Wrench size={24} weight='regular' />
              <span>Config</span>
            </S.SidebarItem>
          </Link>
        </S.SidebarContainer>

        {windowSize <= 1440 && (
          <>
            <S.SidebarMinorContainer isSidebarOpen={isSidebarOpen}>
              <S.SidebarMinorHeader>
                <S.ButtonContainer>
                  <Collapsible.Trigger>
                    <List size={24} />
                  </Collapsible.Trigger>
                </S.ButtonContainer>
              </S.SidebarMinorHeader>
              <Link href='/app/home' style={{ textDecoration: 'none' }}>
                <S.SidebarMinorItem isSelected={router.pathname === '/app/home' && isSidebarOpen}>
                  <ChartPie size={24} weight='fill' />
                  <span>Dashboard</span>
                </S.SidebarMinorItem>
              </Link>
              <Link href='/app/reports' style={{ textDecoration: 'none' }}>
                <S.SidebarMinorItem isSelected={router.pathname === '/app/reports' && isSidebarOpen}>
                  <Receipt size={24} weight='regular' />
                  <span>Reports</span>
                </S.SidebarMinorItem>
              </Link>
              <Link href='/app/config' style={{ textDecoration: 'none' }}>
                <S.SidebarMinorItem isSelected={router.pathname === '/app/config' && isSidebarOpen}>
                  <Wrench size={24} weight='regular' />
                  <span>Config</span>
                </S.SidebarMinorItem>
              </Link>
            </S.SidebarMinorContainer>

            <Collapsible.Trigger asChild>
              <S.Overlay isSidebarOpen={isSidebarOpen} />
            </Collapsible.Trigger>
          </>
        )}
      </>
    </Collapsible.Content>
  )
}
