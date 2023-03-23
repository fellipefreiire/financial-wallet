import dayjs from 'dayjs'

interface GetWeekDatesParams {
  minDate: dayjs.Dayjs
  currentWeekDate: dayjs.Dayjs
  left?: boolean
  right?: boolean
}

const weekDayIndexes = [0, 1, 2, 3, 4, 5, 6]

export function getWeekDates({ minDate, currentWeekDate, left = false, right = false }: GetWeekDatesParams) {
  if (left) {
    currentWeekDate = currentWeekDate.subtract(7, 'day')
  } else if (right) {
    currentWeekDate = currentWeekDate.add(7, 'day')
  }

  const currentDate = dayjs()

  const initialDate = currentWeekDate.subtract(weekDayIndexes[currentWeekDate.get('day')], 'day')

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