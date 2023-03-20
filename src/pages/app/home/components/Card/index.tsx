import { ArrowFatDown, ArrowFatUp, CurrencyDollar } from 'phosphor-react'
import * as S from './styles'

interface CardProps {
  type: 'balance' | 'income' | 'outcome'
  value: string
}

export const Card = ({ type, value }: CardProps) => {
  return (
    <S.CardContainer>
      <S.Teste>
        {type === 'balance' ? (
          <CurrencyDollar />
        ) : type === 'income' ? (
          <ArrowFatUp weight='fill' />
        ) : (
          <ArrowFatDown weight='fill' />
        )}
      </S.Teste>
      {value}
    </S.CardContainer>
  )
}
