import { useState } from 'react'
import { CreditCard } from '../CreditCard'
import * as S from './styles'

interface TransactionMethodsProps {
  transactionMethods: TransactionMethod[]
}

const data = [
  {
    id: 1,
    number: 5555,
    position: 1,
  },
  {
    id: 2,
    number: 6666,
    position: 2,
  },
  {
    id: 3,
    number: 7777,
    position: 3,
  },
  {
    id: 4,
    number: 8888,
    position: 4,
  }
]

export function TransactionMethods({ transactionMethods }: TransactionMethodsProps) {
  const [cards, setCards] = useState(data)

  function handle(cardNumber: number) {
    const card = cards.find((card) => card.number === cardNumber)

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
    }
  }

  return (
    <S.TransactionMethodsContainer>
      <S.Cards>
        {cards.map((card) => (
          <CreditCard
            key={card.id}
            number={card.number}
            cardPosition={card.position}
            // isActive={card.isActive}
            // isLeft={card.isLeft}
            // isRight={card.isRight}
            onClick={() => handle(card.number)}
          />
        ))}
        {/* <CreditCard
          number={6548}
          isActive={false}
          isLeft={true}
          isRight={false}
        />
        <CreditCard
          number={6666}
          isActive={true}
          isLeft={false}
          isRight={false}
        />
        <CreditCard
          number={7777}
          isActive={false}
          isLeft={false}
          isRight={true}
        />
        <CreditCard
          number={8888}
          isActive={false}
          isLeft={false}
          isRight={false}
        /> */}
        {/* <CreditCard
          number={5555}
          isActive={false}
          isLeft={false}
          isRight={false}
        />
        <CreditCard
          number={6666}
          isActive={false}
          isLeft={true}
          isRight={false}
        />
        <CreditCard
          number={7777}
          isActive={true}
          isLeft={false}
          isRight={false}
        />
        <CreditCard
          number={8888}
          isActive={false}
          isLeft={false}
          isRight={true}
        /> */}
      </S.Cards>
    </S.TransactionMethodsContainer>
  )
}