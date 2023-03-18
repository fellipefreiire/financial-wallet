import { Sidebar } from '@/components/Sidebar'
import { useConfig } from '@/store/useConfig'
import { useTransactions } from '@/store/useTransactions'
import { globalStyles } from '@/styles/global'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'

globalStyles()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [getApi, getCreditCards] = useConfig((state) => [
    state.getApi,
    state.getCreditCards,
  ])
  const [getTransactions, getTransactionsValues] = useTransactions((state) => [
    state.getTransactions,
    state.getTransactionsValues,
  ])

  useEffect(() => {
    getApi()
    getCreditCards()
    getTransactions()
    getTransactionsValues()
  }, [getApi, getCreditCards, getTransactions, getTransactionsValues])

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
