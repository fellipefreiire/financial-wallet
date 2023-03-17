import type { NextPage } from 'next'
import * as S from './styles'
import { Card } from './components/Card'
import { Transactions } from './components/Transactions'
import { Header } from '@/components/Header'
import { BottomMenu } from '@/components/BottomMenu'

const Home: NextPage = () => {
  return (
    <S.HomeContainer>
      <Header isHome />

      <Card />

      <Transactions />

      <BottomMenu isHome />
    </S.HomeContainer>
  )
}

export default Home
