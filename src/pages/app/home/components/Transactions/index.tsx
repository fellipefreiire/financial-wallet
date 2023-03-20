import * as Phosphor from 'phosphor-react'
import * as S from './styles'
import { Select, SelectItem } from '../../../../../components/Select'
import { useTransactions } from '@/store/useTransactions'
import { memo, useState } from 'react'
import { Dots } from '../Dots'
import { useConfig } from '@/store/useConfig'
import { useScrollContainer } from 'react-indiana-drag-scroll'

export const TransactionsComponent = () => {
  const scrollContainer = useScrollContainer()
  const [transactionFilter, setTransactionFilter] = useState('Hoje')
  const [transactions] = useTransactions((state) => [state.transactions])
  const [isHide] = useConfig((state) => [state.isHide])

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (
    <S.TransactionsContainer>
      <S.TransactionsHeader>
        <span>Transações</span>

        <div>
          <Select
            defaultValue={transactionFilter}
            onValueChange={(value) => setTransactionFilter(value)}
          >
            <SelectItem value="Hoje">Hoje</SelectItem>
            <SelectItem value="Essa Semana">Essa Semana</SelectItem>
            <SelectItem value="Esse Mês">Esse Mês</SelectItem>
            <SelectItem value="Todas">Todas</SelectItem>
          </Select>
        </div>
      </S.TransactionsHeader>

      <S.Transactions ref={scrollContainer.ref}>
        {transactions.map((transaction) => {
          // @ts-ignore
          const Icon = Phosphor[transaction.category.icon]
          const date = new Date(transaction.date)
          const hours = date.getHours()
          const minutes = date.getMinutes()
          const formattedDate = `${hours}:${minutes}`
          const purchaseMethod =
            transaction.transactionMethod.label === 'Dinheiro'
              ? transaction.transactionMethod.label
              : `${transaction.transactionMethod.label} - ${transaction.transactionMethod.lastDigits}`
          const value = formatter.format(transaction.value)
          const entryValue =
            transaction.category.type === 'Entrada' ? value : `- ${value}`

          return (
            <S.Transaction key={transaction.id}>
              <S.Description>
                <S.IconWrapper>
                  {!isHide ? <Icon size={24} /> : <Dots variant="sm" />}
                </S.IconWrapper>

                <S.DescriptionInfo data-hide={isHide}>
                  {isHide ? (
                    <span data-type="item">
                      <Dots variant="md" />
                    </span>
                  ) : (
                    <span data-type="item">{transaction.category.label}</span>
                  )}
                  {isHide ? (
                    <span data-type="purchase-method">
                      <Dots variant="sm2" />
                    </span>
                  ) : (
                    <span data-type="purchase-method">{purchaseMethod}</span>
                  )}
                </S.DescriptionInfo>
              </S.Description>

              <S.DescriptionValues data-hide={isHide}>
                {isHide ? (
                  <>
                    <span data-type="value">
                      <Dots variant="md" />
                    </span>
                    <span data-type="time">
                      <Dots variant="sm2" />
                    </span>
                  </>
                ) : (
                  <>
                    <span data-type="value">{entryValue}</span>
                    <span data-type="time">{formattedDate}</span>
                  </>
                )}
              </S.DescriptionValues>
            </S.Transaction>
          )
        })}
      </S.Transactions>
    </S.TransactionsContainer>
  )
}

export const Transactions = memo(TransactionsComponent)
