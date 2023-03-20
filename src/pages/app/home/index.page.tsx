import * as S from './styles'
import { ReactElement } from 'react'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Card } from './components/Card'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import { formatCurrency } from '@/utils/formatCurrency'
import { Transactions } from './components/Transactions'

interface HomeProps {
  transactionsValues: {
    balance: number
    income: number
    outcome: number
  }
  transactions: Transaction[]
}

const Home: NextPageWithLayout<HomeProps> = ({ transactionsValues, transactions }) => {
  const balance = formatCurrency(transactionsValues.balance)
  const income = formatCurrency(transactionsValues.income)
  const outcome = formatCurrency(transactionsValues.outcome)

  console.log(transactions)

  return (
    <S.HomeContainer>
      <S.Container side="left">
        <S.CardsWrapper>
          <Card type="balance" value={balance} />
          <Card type="income" value={income} />
          <Card type='outcome' value={outcome} />
        </S.CardsWrapper>
        <S.LeftContainer></S.LeftContainer>
        <S.LeftContainer>
          <Transactions />
        </S.LeftContainer>
      </S.Container>
      <S.Container side="right">
        <S.RightContainer />
        <S.RightContainer />
      </S.Container>
    </S.HomeContainer>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responses = await Promise.all([api.get('/transactionsValues'), api.get('/transactions')])

  return {
    props: {
      transactionsValues: responses[0].data,
      transactions: responses[1].data
    }
  }
}

export default Home
