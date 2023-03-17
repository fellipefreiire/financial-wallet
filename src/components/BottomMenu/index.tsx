import { ChartPie, House, Plus, Receipt, Wrench } from 'phosphor-react'
import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from '../Dialog'
import { Select, SelectItem } from '../Select'
import { useConfig } from '@/store/useConfig'
import { useState } from 'react'
import { useTransactions } from '@/store/useTransactions'

interface IBottomMenuProps {
  isHome?: boolean
}

export const BottomMenu = ({ isHome = false }: IBottomMenuProps) => {
  const router = useRouter()
  const [transactionMethods, categories] = useConfig((state) => [
    state.creditCards,
    state.categories,
  ])
  const [addTransaction] = useTransactions((state) => [state.addTransaction])
  const [value, setValue] = useState<number>(0)
  const [categoryId, setCategoryId] = useState<number>()
  const [transactionMethodId, setTransactionMethodId] = useState<number>()

  const filteredTransactionMethods = transactionMethods.filter(
    (method) => method.active === true,
  )
  const filteredCategories = categories.filter(
    (category) => category.active === true,
  )

  const handleAddTransaction = (
    categoryId: number,
    transactionMethodId: number,
    value: number,
  ) => {
    addTransaction(categoryId, transactionMethodId, value)
  }

  return (
    <S.BottomMenuContainer>
      <div>
        <Link href="/app/home">
          <div data-active={router.pathname === '/app/home' ?? 'true'}>
            <House size={24} weight="bold" />
          </div>
        </Link>
        <div data-active="false">
          <ChartPie size={24} weight="bold" />
        </div>
      </div>

      {isHome && (
        <Dialog>
          <DialogTrigger>
            <S.AddButton>
              <div data-type="add-button">
                <Plus size={24} weight="bold" />
              </div>
            </S.AddButton>
          </DialogTrigger>

          <DialogContent>
            <S.AddTransactionContainer>
              <div data-type="input">
                <span>Método de Transação</span>
                <Select
                  onValueChange={(e) => setTransactionMethodId(Number(e))}
                >
                  {filteredTransactionMethods.map((method) => (
                    <SelectItem key={method.id} value={String(method.id)}>
                      {method.label === 'Dinheiro'
                        ? method.label
                        : `${method.label} - ${method.lastDigits}`}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div data-type="split">
                <div data-type="input">
                  <span>Categoria</span>
                  <Select onValueChange={(e) => setCategoryId(Number(e))}>
                    {filteredCategories.map((category) => (
                      <SelectItem key={category.id} value={String(category.id)}>
                        {category.label} - {category.type}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div data-type="input">
                  <span>Valor</span>
                  <input
                    type="number"
                    value={Number(value)}
                    onChange={(e) => setValue(Number(e.target.value))}
                  />
                </div>
              </div>

              <div data-type="button">
                <button
                  data-type="add"
                  onClick={() =>
                    handleAddTransaction(
                      categoryId!,
                      transactionMethodId!,
                      value!,
                    )
                  }
                >
                  Adicionar
                </button>
                <button data-type="cancel">Cancelar</button>
              </div>
            </S.AddTransactionContainer>
          </DialogContent>
        </Dialog>
      )}

      <div>
        <div data-active="false">
          <Receipt size={24} weight="bold" />
        </div>
        <Link href="/app/config">
          <div data-active={router.pathname === '/app/config' ?? 'true'}>
            <Wrench size={24} weight="bold" />
          </div>
        </Link>
      </div>
    </S.BottomMenuContainer>
  )
}
