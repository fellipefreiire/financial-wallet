import { CreditCard } from '../CreditCard'
import * as S from './styles'

interface TransactionMethodsProps {
  transactionMethods: TransactionMethod[]
}

export function TransactionMethods({ transactionMethods }: TransactionMethodsProps) {
  console.log(transactionMethods)
  return (
    <S.TransactionMethodsContainer>
      <CreditCard />
    </S.TransactionMethodsContainer>
  )
}