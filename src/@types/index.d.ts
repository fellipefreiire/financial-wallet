type Transaction = {
  id: number
  value: number
  date: Date
  transactionMethodId: number
  categoriesId: number,
  category: {
    id: number
    label: string
    type: string
    icon: string
    active: boolean
  }
  transactionMethod: {
    id: number
    label: string
    lastDigits: string
    type: string
    active: boolean
  }
}