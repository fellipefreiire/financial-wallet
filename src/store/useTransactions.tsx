import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Category, CreditCard } from './useConfig'
import axios from 'axios'

interface ITransactionsStore {
  transactions: {
    id: number
    category: Category
    transactionMethod: CreditCard
    value: number
    date: Date
  }[]
  transactionsValues: {
    balance: number
    income: number
    outcome: number
  }
  getTransactions: () => Promise<void>
  getTransactionsValues: () => Promise<void>
  addTransaction: (
    categoryId: number,
    transactionMethodId: number,
    value: number,
  ) => Promise<void>
}

export const useTransactions = create<ITransactionsStore>()(
  immer((set) => ({
    transactions: [],
    transactionsValues: {
      balance: 0,
      income: 0,
      outcome: 0,
    },
    getTransactions: async () => {
      const apiResponse = await axios.get(
        'http://192.168.0.73:3030/transactions',
      )
      set((state) => {
        state.transactions = apiResponse.data
      })
    },
    getTransactionsValues: async () => {
      const apiResponse = await axios.get(
        'http://192.168.0.73:3030/transactionsValues',
      )
      set((state) => {
        state.transactionsValues = apiResponse.data
      })
    },
    addTransaction: async (
      categoryId: number,
      transactionMethodId: number,
      value: number,
    ) => {
      const apiResponse = await axios.post(
        'http://192.168.0.73:3030/transaction',
        {
          transactionMethodId,
          categoryId,
          value,
        },
      )

      set((state) => {
        state.transactions = [...state.transactions, apiResponse.data]
      })
    },
  })),
)
