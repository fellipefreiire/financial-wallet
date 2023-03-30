import { useState } from 'react'
import { CreditCard } from '../CreditCard'
import * as S from './styles'
import { Browser, Calendar, CaretLeft, CaretRight } from 'phosphor-react'
import { PieChart } from '../PieChart'
import dayjs from 'dayjs'

interface TransactionMethodsProps {
  transactions: Transaction[]
  transactionMethods: TransactionMethod[]
  minDateFromTransactions: dayjs.Dayjs
}

type Teste = {
  labels: string[]
  data: number[]
}

export function TransactionMethods({ transactions, transactionMethods, minDateFromTransactions }: TransactionMethodsProps) {
  const [cards, setCards] = useState(transactionMethods.map((method, i) => {
    return {
      ...method,
      position: i + 1
    }
  }))
  const [selectedCard, setSelectedCard] = useState(cards.find((card) => card.position === 2))
  const [currentDate, setCurrentDate] = useState(dayjs())

  function handle(cardNumber: number) {
    const card = cards.find((card) => Number(card.lastDigits) === cardNumber)

    if (card?.position === 2) return

    const maxPos = cards.reduce((a, b) => Math.max(a, b.position), 0)

    if (card?.position === 1) {
      const newCards = cards.map((card) => {
        if (card.position === maxPos) {
          card.position = 1
        } else {
          card.position += 1
        }

        return card
      })

      setCards(newCards)
      setSelectedCard(newCards.find((card) => card.position === 2))

      return
    }

    if (card?.position === 3) {
      const newCards = cards.map((card) => {
        if (card.position === 1) {
          card.position = maxPos
        } else {
          card.position -= 1
        }

        return card
      })

      setCards(newCards)
      setSelectedCard(newCards.find((card) => card.position === 2))
    }
  }

  const teste = transactions.filter((transaction) => transaction.transactionMethodId === selectedCard?.id && dayjs(transaction.date).isSame(currentDate, 'month'))

  const teste2 = teste.reduce<Teste>((acc, curr) => {
    if (acc.labels.some((label) => label === curr.category.label)) {
      const a = acc.labels.findIndex((label) => label === curr.category.label)
      acc.data[a] += curr.value
    } else {
      acc.labels.push(curr.category.label)
      acc.data.push(curr.value)
    }

    return acc
  }, {
    labels: [],
    data: [],
  })

  function handleLeft() {
    if (currentDate.subtract(1, 'month').get('month') < minDateFromTransactions.get('month')) return
    setCurrentDate(currentDate.subtract(1, 'month'))
  }

  function handleRight() {
    if (currentDate.add(1, 'month').get('month') > dayjs().get('month')) return
    setCurrentDate(currentDate.add(1, 'month'))
  }

  return (
    <S.TransactionMethodsContainer>
      <S.Cards>
        {cards.map((card) => (
          <CreditCard
            key={card.id}
            number={Number(card.lastDigits)}
            cardPosition={card.position}
            onClick={() => handle(Number(card.lastDigits))}
          />
        ))}
      </S.Cards>
      <S.CardDetailContainer>
        <h2>Card details</h2>
        <S.CardDetails>
          <S.Row>
            <S.IconWrapper>
              <Browser size={24} />
            </S.IconWrapper>
            <S.InfoWrapper>
              <span>Card No.</span>
              <span>**** **** **** {selectedCard?.lastDigits}</span>
            </S.InfoWrapper>
          </S.Row>
          <S.Row>
            <S.IconWrapper>
              <Calendar size={24} />
            </S.IconWrapper>
            <S.InfoWrapper>
              <span>Expiry date</span>
              <span>08/27</span>
            </S.InfoWrapper>
          </S.Row>
        </S.CardDetails>
        {/* <S.ButtonWrapper>
          <button>Settings</button>
          <button>Lock Card</button>
        </S.ButtonWrapper> */}
      </S.CardDetailContainer>
      <S.ChartContainer>
        <S.ChartController>
          <button onClick={handleLeft}>
            <CaretLeft size={20} weight='bold' />
          </button>
          <span>{currentDate.format('MMMM - YYYY')}</span>
          <button onClick={handleRight}>
            <CaretRight size={20} weight='bold' />
          </button>
        </S.ChartController>
        <PieChart data={teste2} />
      </S.ChartContainer>
    </S.TransactionMethodsContainer>
  )
}