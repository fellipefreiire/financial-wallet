export const formatCurrency = (value: number, withComma: boolean = false) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // compactDisplay: 'short',
    maximumFractionDigits: withComma ? 0 : 2,
  }).format(value)
}