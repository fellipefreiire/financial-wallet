import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ChartOptions, ChartData } from 'chart.js'
import dayjs from 'dayjs'
import { Line } from 'react-chartjs-2'

import { B, K, M, T } from '@/utils/constants'
import { formatCurrency } from '@/utils/formatCurrency'
import { getWeekDays } from '@/utils/getWeekDays'
import { getStepSizeAndMaxValue } from '@/utils/getStepSizeAndMaxValue'

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
  const maxValue = transactions.reduce((a, b) => Math.max(a, b))
  const stepSizeAndMaxValue = getStepSizeAndMaxValue(maxValue)

  const data: ChartData<'line'> = {
    labels: weekDaysLabels,
    datasets: [
      {
        data: transactions,
        //TODO - REMOVE TS IGNORE
        // @ts-ignore
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
        max: stepSizeAndMaxValue.maxValue,
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
            switch (true) {
              case (Number(value) >= T):
                return (Number(value) / T).toFixed(0) + 'T'
              case (Number(value) >= B):
                return (Number(value) / B).toFixed(0) + 'B'
              case (Number(value) >= M):
                return (Number(value) / M).toFixed(0) + 'M'
              case (Number(value) >= K):
                return (Number(value) / K).toFixed(0) + 'K'
              default:
                return (Number(value))
            }
          },
          color: '#8F8FAB',
          stepSize: stepSizeAndMaxValue.stepSize
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