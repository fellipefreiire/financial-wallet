export const formatCurrency = (value: number, withComma: boolean = false) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: withComma ? 0 : 2,
  }).format(value)
}