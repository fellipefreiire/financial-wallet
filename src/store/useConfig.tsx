import axios from 'axios'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type CreditCard = {
  id: number
  label: string
  lastDigits: string
  type: string
  active: boolean
}

export type Category = {
  id: number
  label: string
  type: 'Entrada' | 'Saída'
  icon: string
  active: boolean
}

interface IConfigStore {
  isHide: boolean
  creditCards: CreditCard[]
  categories: Category[]
  toggleHide: () => void
  getApi: () => Promise<void>
  getCreditCards: () => Promise<void>
  toggleCategoryActivity: (id: number, isActive: boolean) => Promise<void>
  addCategory: (
    label: string,
    type: string,
    lastDigits: string,
  ) => Promise<void>
}

export const useConfig = create<IConfigStore>()(
  immer((set) => ({
    isHide: false,
    creditCards: [],
    categories: [],
    toggleHide: () =>
      set((state) => {
        state.isHide = !state.isHide
      }),
    getApi: async () => {
      const apiResponse = await axios.get('http://192.168.0.73:3030/categories')
      set((state) => {
        state.categories = apiResponse.data
      })
    },
    getCreditCards: async () => {
      const apiResponse = await axios.get(
        'http://192.168.0.73:3030/transactionMethods',
      )
      set((state) => {
        state.creditCards = apiResponse.data
      })
    },
    toggleCategoryActivity: async (id: number, isActive: boolean) => {
      const apiResponse = await axios.put(
        `http://192.168.0.73:3030/category/${id}`,
        {
          data: {
            active: isActive,
          },
        },
      )
      set((state) => {
        const category = state.categories.find(
          (category) => apiResponse.data.id === category.id,
        )

        category!.active = apiResponse.data.active
      })
    },
    addCategory: async (label: string, type: string, lastDigits: string) => {
      const apiResponse = await axios.post(
        'http://192.168.0.73:3030/transactionMethod',
        {
          label,
          type,
          lastDigits,
        },
      )
      set((state) => {
        state.creditCards = [...state.creditCards, apiResponse.data]
      })
    },
  })),
)
