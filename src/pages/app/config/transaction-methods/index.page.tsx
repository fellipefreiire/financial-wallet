import type { NextPage } from 'next'
import { CaretLeft, CreditCard, Plus, Money } from 'phosphor-react'
import * as S from './styles'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Dialog, DialogContent, DialogTrigger } from '@/components/Dialog'
import { Select, SelectItem } from '@/components/Select'
import { useConfig } from '@/store/useConfig'
import { useEffect, useState } from 'react'

const CreditCards: NextPage = () => {
  const [creditCards, addCategory] = useConfig((state) => [
    state.creditCards,
    state.addCategory,
  ])

  const handleAddCategory = async () => {
    await addCategory(label, type, lastDigits)
  }
  const [label, setLabel] = useState('')
  const [type, setType] = useState('')
  const [lastDigits, setLastDigits] = useState('')

  useEffect(() => {}, [creditCards])

  return (
    <S.CategoriesContainer>
      <Header />

      <Link href="/app/config">
        <S.BackButton>
          <CaretLeft size={32} color="white" />
        </S.BackButton>
      </Link>

      <S.CategoryList>
        <h1>Métodos de Transação</h1>
        {creditCards.map((category) => {
          return (
            <S.Category key={category.id} data-active={category.active}>
              <div>
                {category.label === 'Dinheiro' ? (
                  <Money size={24} color="#6886D5" />
                ) : (
                  <CreditCard size={24} color="#6886D5" />
                )}

                {category.type !== null ? (
                  <span>
                    {category.label} - {category.type}
                  </span>
                ) : (
                  <span>{category.label}</span>
                )}
              </div>

              {category.lastDigits !== null && (
                <span>{category.lastDigits}</span>
              )}
            </S.Category>
          )
        })}
      </S.CategoryList>

      <Dialog>
        <DialogTrigger>
          <S.AddButton>
            <Plus size={24} color="white" weight="bold" />
          </S.AddButton>
        </DialogTrigger>

        <DialogContent>
          <S.CreateCategoryContainer>
            <div data-type="input">
              <span>Bandeira</span>
              <Select value={label} onValueChange={setLabel}>
                <SelectItem value="Mastercard">Mastercard</SelectItem>
                <SelectItem value="Nubank">Nubank</SelectItem>
                <SelectItem value="Visa">Visa</SelectItem>
              </Select>
            </div>
            <div data-type="split">
              <div data-type="input">
                <span>Tipo</span>
                <Select value={type} onValueChange={setType}>
                  <SelectItem value="Crédito">Crédito</SelectItem>
                  <SelectItem value="Débito">Débito</SelectItem>
                  <SelectItem value="Crédito & Débito">
                    Crédito & Débito
                  </SelectItem>
                </Select>
              </div>
              <div data-type="input">
                <span>Últimos Dígitos</span>
                <input
                  type="text"
                  value={lastDigits}
                  onChange={(e) => setLastDigits(e.target.value)}
                />
              </div>
            </div>
            <div data-type="button">
              <button data-type="add" onClick={() => handleAddCategory()}>
                Adicionar
              </button>
              <button data-type="cancel">Cancelar</button>
            </div>
          </S.CreateCategoryContainer>
        </DialogContent>
      </Dialog>
    </S.CategoriesContainer>
  )
}

export default CreditCards
