import dayjs from "dayjs";

interface Get {
  currentWeek: {
    currentWeekDate: dayjs.Dayjs;
    initialDate: dayjs.Dayjs;
    finalDate: dayjs.Dayjs;
  }
  transactions: Transaction[]
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


  const ta = Array.from({ length: 7 }).reduce<number[]>((acc, _, i) => {
    const currentDay = currentWeek.initialDate.add(i, 'day')

    if (filter.some((a) => dayjs(a.date).isSame(currentDay, 'date'))) {
      if (filter[i]) {
        acc.push(filter[i].value!)
      }
    } else {
      acc.push(0)
    }

    return acc
  }, [])

  return ta
}