import { Wallet, TrendUp, TrendDown } from 'phosphor-react'
import * as S from './styles'

interface CardProps {
  type: 'balance' | 'income' | 'outcome'
  value: string
}

export const Card = ({ type, value }: CardProps) => {
  return (
    <S.CardContainer>
      {/* <S.Teste> */}
      {type === 'balance' ? (
        <S.Teste2>
          <S.Teste3>
            <Wallet size={16} color='white' />
          </S.Teste3>
          <S.Teste4>
            <h3>Total Balance</h3>
            <span>{value}</span>
          </S.Teste4>
        </S.Teste2>
      ) : type === 'income' ? (
        <S.Teste2>
          <S.Teste3>
            <TrendUp size={16} />
          </S.Teste3>
          <S.Teste4>
            <h3>Income</h3>
            <span>{value}</span>
          </S.Teste4>
        </S.Teste2>
      ) : (
        <S.Teste2>
          <S.Teste3>
            <TrendDown size={16} />
          </S.Teste3>
          <S.Teste4>
            <h3>Outcome</h3>
            <span>{value}</span>
          </S.Teste4>
        </S.Teste2>
      )}
      {/* </S.Teste> */}
    </S.CardContainer>
  )
}
