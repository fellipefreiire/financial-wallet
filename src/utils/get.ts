import dayjs from "dayjs";

interface Get {
  currentWeek: {
    currentWeekDate: dayjs.Dayjs;
    initialDate: dayjs.Dayjs;
    finalDate: dayjs.Dayjs;
  }
  transactions: Transaction[]
}

type Teste = {
  data: number[]
}

export function getTeste({ transactions, currentWeek }: Get) {
  const outcomes = transactions.filter((transaction) => transaction.category.type === 'Saída')

  const filter = outcomes.reduce<Partial<Transaction>[]>((acc, curr, i) => {
    if (acc.some((e) => dayjs(e.date).isSame(dayjs(curr.date), 'date'))) {
      acc.filter((e) => dayjs(e.date).isSame(dayjs(curr.date), 'date'))[0].value! += curr.value
    } else {
      acc.push({
        date: curr.date,
        value: curr.value,
      })
    }
    return acc
  }, [])

  const trans = filter.filter((transaction) => {
    return dayjs(transaction.date).valueOf() > currentWeek.initialDate.valueOf() && dayjs(transaction.date).valueOf() < currentWeek.finalDate.valueOf()
  })

  const tt = trans.reduce<Teste>((acc, curr) => {
    acc.data.push(curr.value!)

    return acc
  }, {
    data: []
  })
  return tt
}