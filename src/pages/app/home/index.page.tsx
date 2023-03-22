import * as S from './styles'
import { ReactElement, useEffect, useState } from 'react'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Card } from './components/Card'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import { formatCurrency } from '@/utils/formatCurrency'
import { Transactions } from './components/Transactions'
import { LineChart } from './components/LineChart'
import dayjs from 'dayjs'
import { getWeekDates } from '@/utils/getWeekDates'
import { getMinDateFromTransactions } from '@/utils/getMinDateFromTransactions'
import { getTeste } from '@/utils/get'

interface HomeProps {
  transactionsValues: {
    balance: number
    income: number
    outcome: number
  }
  transactions: Transaction[]
}

const Home: NextPageWithLayout<HomeProps> = ({ transactionsValues, transactions }) => {
  const [currentWeek, setCurrentWeek] = useState(() => {
    const currentWeekDate = dayjs(new Date())

    const initialDate = dayjs().set('date', currentWeekDate.get('date') - currentWeekDate.get('day'))
    const finalDate = initialDate.add(6, 'day')

    return {
      currentWeekDate,
      initialDate,
      finalDate,
    }
  })

  const balance = formatCurrency(transactionsValues.balance)
  const income = formatCurrency(transactionsValues.income)
  const outcome = formatCurrency(transactionsValues.outcome)

  const minDateFromTransactions = getMinDateFromTransactions(transactions)

  const filtered = getTeste({ transactions, currentWeek })

  console.log(filtered)

  function handleLeft() {
    const week = getWeekDates({ minDate: minDateFromTransactions, currentWeekDate: currentWeek.currentWeekDate, left: true })
    if (week) setCurrentWeek(week)
  }

  function handleRight() {
    const week = getWeekDates({ minDate: minDateFromTransactions, currentWeekDate: currentWeek.currentWeekDate, right: true })
    if (week) setCurrentWeek(week)
  }

  return (
    <S.HomeContainer>
      <S.Container side="left">
        <S.CardsWrapper>
          <Card type="balance" value={balance} />
          <Card type="income" value={income} />
          <Card type='outcome' value={outcome} />
        </S.CardsWrapper>
        <S.LeftContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <span>{currentWeek.initialDate.format('D[/]M[/]YYYY')}</span>
              <span>{currentWeek.finalDate.format('D[/]M[/]YYYY')}</span>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <button onClick={() => handleLeft()}>Left</button>
              <button onClick={() => handleRight()}>Right</button>
            </div>
          </div>
          <LineChart transactions={filtered} />
        </S.LeftContainer>
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
