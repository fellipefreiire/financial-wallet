import dayjs from 'dayjs'

interface GetWeekDatesParams {
  currentDate: dayjs.Dayjs
  left?: boolean
  right?: boolean
}

export function getWeekDates({ currentDate, left = false, right = false }: GetWeekDatesParams) {
  if (left) {
    currentDate = currentDate.subtract(7, 'day')
  } else if (right) {
    currentDate = currentDate.add(7, 'day')
  }

  const reversedWeekDayIndex = [6, 5, 4, 3, 2, 1, 0]

  const initialDate = dayjs().set('date', currentDate.get('date') - currentDate.get('day')).set('month', currentDate.get('month')).set('year', currentDate.get('year'))

  let finalDate = dayjs().set('date', currentDate.get('date') + reversedWeekDayIndex[currentDate.get('day')]).set('month', currentDate.get('month')).set('year', currentDate.get('year'))

  console.log(currentDate.format('D[/]M[/]YYYY'))
  console.log(initialDate.format('D[/]M[/]YYYY'))
  console.log(finalDate.format('D[/]M[/]YYYY'))

  return {
    currentDate,
    initialDate,
    finalDate,
  }
}