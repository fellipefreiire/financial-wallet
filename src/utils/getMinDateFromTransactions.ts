import dayjs from 'dayjs'

export function getMinDateFromTransactions(transactions: Transaction[]) {
  const transactionsDates = transactions.map((transaction) => {
    return dayjs(transaction.date)
  })

  const minDate = Math.min(
    ...transactionsDates.map(element => {
      return element.valueOf()
    })
  )

  return dayjs(minDate)
}