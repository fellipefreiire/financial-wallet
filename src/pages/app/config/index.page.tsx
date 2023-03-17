import type { NextPage } from 'next'
import * as S from './styles'
import {
  CreditCard,
  TrendUp,
  TrendDown,
  AirplaneTilt,
  Note,
  Stack,
} from 'phosphor-react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { BottomMenu } from '@/components/BottomMenu'

const Config: NextPage = () => {
  return (
    <S.ConfigContainer>
      <Header />

      <S.ConfigOptions>
        <Link href="/app/config/credit-cards">
          <S.Option>
            <div>
              <CreditCard size={48} color="#6886D5" weight="light" />
            </div>
            <span>Cartões</span>
          </S.Option>
        </Link>
        <Link href="/app/config/categorias">
          <S.Option>
            <div>
              <Stack size={48} color="#6886D5" weight="light" />
            </div>
            <span>Categorias</span>
          </S.Option>
        </Link>
        <S.Option>
          <div>
            <TrendUp size={48} color="#6886D5" weight="light" />
          </div>
          <span>Investimentos</span>
        </S.Option>
        <S.Option>
          <div>
            <TrendDown size={48} color="#6886D5" weight="light" />
          </div>
          <span>Débitos</span>
        </S.Option>
        <S.Option>
          <div>
            <AirplaneTilt size={48} color="#6886D5" weight="light" />
          </div>
          <span>Metas</span>
        </S.Option>
        <S.Option>
          <div>
            <Note size={48} color="#6886D5" weight="light" />
          </div>
          <span>Lembretes</span>
        </S.Option>
      </S.ConfigOptions>

      <BottomMenu />
    </S.ConfigContainer>
  )
}

export default Config
