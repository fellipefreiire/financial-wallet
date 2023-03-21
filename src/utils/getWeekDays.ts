export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => {
      const date = new Date(Date.UTC(2023, 1, day - 1))
      return formatter.format(date)
    })
    .map((weekDay) => {
      return weekDay.substring(0, 3).toUpperCase()
    })
}