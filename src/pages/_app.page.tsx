import { useConfig } from '@/store/useConfig'
import { useTransactions } from '@/store/useTransactions'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  const [getApi, getCreditCards] = useConfig((state) => [state.getApi, state.getCreditCards])
  const [getTransactions, getTransactionsValues] = useTransactions((state) => [state.getTransactions, state.getTransactionsValues])

  useEffect(() => {
    getApi()
    getCreditCards()
    getTransactions()
    getTransactionsValues()
  }, [getApi, getCreditCards, getTransactions, getTransactionsValues])

  return (
    <Component {...pageProps} />
  )
}
