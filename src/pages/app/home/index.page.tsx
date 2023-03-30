import { ReactElement, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import { NextPageWithLayout } from '@/pages/_app.page'
import { AppLayout } from '@/layouts/AppLayout'
import { api } from '@/lib/axios'
import dayjs from 'dayjs'

import { Card } from './components/Card'
import { LineChart } from './components/LineChart'
import { Transactions } from './components/Transactions'

import { formatCurrency } from '@/utils/formatCurrency'
import { getMinDateFromTransactions } from '@/utils/getMinDateFromTransactions'
import { getWeekDates } from '@/utils/getWeekDates'
import { getTeste } from '@/utils/get'

import { CaretLeft, CaretRight } from 'phosphor-react'
import * as S from './styles'
import { TransactionMethods } from './components/TransactionMethods'

interface HomeProps {
  transactionsValues: {
    balance: number
    income: number
    outcome: number
  }
  transactions: Transaction[]
  transactionMethods: TransactionMethod[]
}

const Home: NextPageWithLayout<HomeProps> = ({ transactionsValues, transactions, transactionMethods }) => {
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

  function handleLeft() {
    const week = getWeekDates({ minDate: minDateFromTransactions, currentWeekDate: currentWeek.currentWeekDate, left: true })
    if (week) setCurrentWeek(week)
  }

  function handleRight() {
    const week = getWeekDates({ minDate: minDateFromTransactions, currentWeekDate: currentWeek.currentWeekDate, right: true })
    if (week) setCurrentWeek(week)
  }

  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    if (i === 0) {
      return currentWeek.initialDate
    }

    return currentWeek.initialDate.add(i, 'day')
  })

  const isSameYear = currentWeek.initialDate.get('year') === currentWeek.finalDate.get('year')


  return (
    <S.HomeContainer>
      <S.Container side="left">
        <S.CardsWrapper>
          <Card type="balance" value={balance} />
          <Card type="income" value={income} />
          <Card type='outcome' value={outcome} />
        </S.CardsWrapper>
        <S.GraphContainer>
          <S.GraphController>
            <S.Title>Spend Analysis</S.Title>
            <S.GraphControllerContainer>
              <button onClick={() => handleLeft()}>
                <CaretLeft size={20} weight='bold' />
              </button>
              <S.GraphControllerDates>
                <span>{currentWeek.initialDate.format(`DD MMM${isSameYear ? '' : ' YYYY'}`)}</span>
                <div />
                <span>{currentWeek.finalDate.format('DD MMM YYYY')}</span>
              </S.GraphControllerDates>
              <button onClick={() => handleRight()}>
                <CaretRight size={20} weight='bold' />
              </button>
            </S.GraphControllerContainer>
          </S.GraphController>
          <LineChart transactions={filtered} weekDays={weekDays} />
        </S.GraphContainer>
        <S.LeftContainer>
          <Transactions />
        </S.LeftContainer>
      </S.Container>
      <S.Container side="right">
        <S.RightContainer>
          <TransactionMethods
            transactions={transactions}
            transactionMethods={transactionMethods}
            minDateFromTransactions={minDateFromTransactions}
          />
        </S.RightContainer>
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
  const responses = await Promise.all([
    api.get('/transactionsValues'),
    api.get('/transactions'),
    api.get('/transactionMethods')
  ])

  return {
    props: {
      transactionsValues: responses[0].data,
      transactions: responses[1].data,
      transactionMethods: responses[2].data,
    }
  }
}

export default Home
