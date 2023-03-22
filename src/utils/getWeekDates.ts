import dayjs from 'dayjs'

interface GetWeekDatesParams {
  minDate: dayjs.Dayjs
  currentWeekDate: dayjs.Dayjs
  left?: boolean
  right?: boolean
}

export function getWeekDates({ minDate, currentWeekDate, left = false, right = false }: GetWeekDatesParams) {
  if (left) {
    currentWeekDate = currentWeekDate.subtract(7, 'day')
  } else if (right) {
    currentWeekDate = currentWeekDate.add(7, 'day')
  }

  const currentDate = dayjs()

  const initialDate = dayjs().set('date', currentWeekDate.get('date') - currentWeekDate.get('day')).set('month', currentWeekDate.get('month')).set('year', currentWeekDate.get('year'))

  const finalDate = initialDate.add(6, 'day')

  if (
    finalDate.valueOf() < minDate.valueOf() ||
    initialDate.valueOf() > currentDate.valueOf()
  ) return

  return {
    currentWeekDate,
    initialDate,
    finalDate,
  }
}