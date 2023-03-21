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

  const initialDate = dayjs().set('date', currentDate.get('date') - currentDate.get('day')).set('month', currentDate.get('month')).set('year', currentDate.get('year'))
  const finalDate = initialDate.add(6, 'day')


  return {
    currentDate,
    initialDate,
    finalDate,
  }
}