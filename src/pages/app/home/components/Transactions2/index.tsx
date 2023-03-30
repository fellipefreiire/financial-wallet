import { useScrollContainer } from 'react-indiana-drag-scroll'

import { Calendar, CreditCard, House, Money } from 'phosphor-react'
import * as S from './styles'

export function Transactions2() {
  const scrollContainer = useScrollContainer()

  return (
    <S.TransactionsContainer>
      <S.TransactionsHeader>
        <h2>Transactions history</h2>
        <S.DatePickerContainer>
          22 Apr - 25 Apr 2023 <Calendar size={32} />
        </S.DatePickerContainer>
      </S.TransactionsHeader>
      <S.TransactionsH>
        <S.TransactionsHI spacing='two' variant='withBorder'>
          <span>Category</span>
        </S.TransactionsHI>
        <S.TransactionsHI spacing='two' variant='withBorder'>
          <span>Transaction Method</span>
        </S.TransactionsHI>
        <S.TransactionsHI spacing='one' variant='withBorder'>
          <span>Date</span>
        </S.TransactionsHI>
        <S.TransactionsHI spacing='one'>
          <span>Amount</span>
        </S.TransactionsHI>
      </S.TransactionsH>

      <S.TransactionsItemsContainer ref={scrollContainer.ref}>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <CreditCard size={20} weight='fill' />
            </div>
            <span>6582</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <Money size={20} weight='fill' />
            </div>
            <span>Money</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <Money size={20} weight='fill' />
            </div>
            <span>Money</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <Money size={20} weight='fill' />
            </div>
            <span>Money</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <Money size={20} weight='fill' />
            </div>
            <span>Money</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <Money size={20} weight='fill' />
            </div>
            <span>Money</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
        <S.Row>
          <S.TransactionsItem spacing='two'>
            <S.IconWrapper>
              <House size={32} weight='fill' />
            </S.IconWrapper>
            <span>House</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='two'>
            <div>
              <Money size={20} weight='fill' />
            </div>
            <span>Money</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>Mon, 24 Apr</span>
          </S.TransactionsItem>
          <S.TransactionsItem spacing='one'>
            <span>$25</span>
          </S.TransactionsItem>
        </S.Row>
      </S.TransactionsItemsContainer>
    </S.TransactionsContainer>
  )
}