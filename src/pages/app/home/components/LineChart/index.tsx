import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ChartOptions, ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2'
import dayjs from 'dayjs'
import { getWeekDays } from '@/utils/getWeekDays'
import { formatCurrency } from '@/utils/formatCurrency'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
)

interface LineChartProps {
  transactions: number[]
  weekDays: dayjs.Dayjs[]
}

export function LineChart({ transactions, weekDays }: LineChartProps) {
  const weekDaysLabels = getWeekDays()

  const data: ChartData<'line'> = {
    labels: weekDaysLabels,
    datasets: [
      {
        data: transactions,
        //TODO - REMOVE TS IGNORE
        //@ts-ignore
        fill: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart

          if (!chartArea) return

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
          gradient.addColorStop(0, 'rgba(0,255,0,0)')
          gradient.addColorStop(0.2, 'rgba(0,255,0,0.01)')
          gradient.addColorStop(0.4, 'rgba(0,255,0,0.03)')
          gradient.addColorStop(0.6, 'rgba(0,255,0,0.04)')
          gradient.addColorStop(0.8, 'rgba(0,255,0,0.05)')
          gradient.addColorStop(1, 'rgba(0,255,0,0.06)')

          return {
            target: 'origin',
            above: gradient,
            below: gradient,
          }
        }
      },
    ]
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      filler: {
        drawTime: 'beforeDatasetDraw',
        propagate: true
      },
      tooltip: {
        caretSize: 0,
        caretPadding: 16,
        backgroundColor: 'black',
        yAlign: 'bottom',
        xAlign: 'right',
        padding: 16,
        displayColors: false,
        titleAlign: 'left',
        cornerRadius: 0,
        bodySpacing: 8,
        bodyFont: {
          size: 16,
        },
        titleFont: {
          size: 24,
        },
        callbacks: {
          label: function (this, tooltipItems) {
            const currentDayIndex = weekDaysLabels.indexOf(tooltipItems.label)
            const currentDate = weekDays[currentDayIndex]

            return currentDate.format('dddd[ ]D[ ]MMMM')
          },
          title: function (this, tooltipItems) {
            const data = tooltipItems[0].formattedValue.replace(/,/g, '.')

            if (Number(data) % 1 === 0) {
              return formatCurrency(Number(data), true)
            }

            return formatCurrency(Number(data))
          },
        }
      }
    },
    elements: {
      line: {
        borderWidth: 4,
        tension: 0,
        borderColor: 'green',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      },
      point: {
        radius: transactions.length > 1 ? 0 : 4,
        hitRadius: 12,
        backgroundColor: 'green',
        hoverBorderColor: 'green',
        hoverBackgroundColor: '#4E4E6B',
        hoverBorderWidth: 4,
        hoverRadius: 8,
      },
    },
    layout: {
      autoPadding: true,
    },
    scales: {
      x: {
        bounds: 'ticks',
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 0,
          color: '#8F8FAB',
        },
        offset: true,
      },
      y: {
        type: 'linear',
        min: 0,
        max: function (): number {
          //TODO MAKE A FUNCTION TO GET DECIMAL PLACES
          const mValue = 9000
          const maxValue = transactions.reduce((a, b) => Math.max(a, b))
          const decimalPlaces = Math.floor(Math.log10(mValue)) + 1

          if (decimalPlaces === 3) return Math.floor(mValue / 100) * 100 + 100

          if (decimalPlaces === 4) return Math.floor(mValue / 1000) * 1000 + 1000

          if (decimalPlaces === 5) return Math.floor(mValue / 10000) * 10000 + 10000

          if (decimalPlaces === 6) return Math.floor(mValue / 100000) * 100000 + 100000

          if (decimalPlaces === 7) return Math.floor(mValue / 1000000) * 1000000 + 1000000

          if (decimalPlaces === 8) return Math.floor(mValue / 10000000) * 10000000 + 10000000

          if (decimalPlaces === 9) return Math.floor(mValue / 100000000) * 100000000 + 100000000

          return 100
        }(),
        offset: true,
        bounds: 'ticks',
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            if (Number(value) > 999 && Number(value) < 1000000) {
              return (Number(value) / 1000).toFixed(0) + 'K';
            } else if (Number(value) > 1000000) {
              return (Number(value) / 1000000).toFixed(0) + 'M';
            } else if (Number(value) > 1000000000) {
              return (Number(value) / 1000000000).toFixed(0) + 'B';
            } else if (Number(value) < 900) {
              return Number(value);
            }
          },
          color: '#8F8FAB',
          stepSize: 3000,
        }
      }
    }
  }
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}