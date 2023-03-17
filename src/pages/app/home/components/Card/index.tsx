import { useConfig } from '@/store/useConfig'
import { Dots } from '../Dots'
import * as S from './styles'
import { useTransactions } from '@/store/useTransactions'
import { useEffect } from 'react'

export const Card = () => {
  const [isHide] = useConfig((state) => [state.isHide])
  const [transactionValues, getTransactionsValues] = useTransactions(
    (state) => [state.transactionsValues, state.getTransactionsValues],
  )

  useEffect(() => {
    getTransactionsValues()
  }, [getTransactionsValues])

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (
    <S.CardContainer>
      <S.CardTop data-hide={isHide}>
        <span data-type="text">Saldo</span>
        <span data-type="top-value">
          {!isHide ? (
            <>{formatter.format(transactionValues.balance)}</>
          ) : (
            <Dots variant="lg" />
          )}
        </span>
      </S.CardTop>

      <S.CardBottom>
        <S.IncomeContainer data-hide={isHide}>
          <span data-type="text">Entradas</span>
          {!isHide ? (
            <span data-type="bottom-value">
              {formatter.format(transactionValues.income)}
            </span>
          ) : (
            <Dots variant="md2" />
          )}
        </S.IncomeContainer>

        <S.Separator />

        <S.OutcomeContainer data-hide={isHide}>
          <span data-type="text">Saídas</span>
          {!isHide ? (
            <span data-type="bottom-value">
              {formatter.format(transactionValues.outcome)}
            </span>
          ) : (
            <Dots variant="md2" />
          )}
        </S.OutcomeContainer>
      </S.CardBottom>
    </S.CardContainer>
  )
}
