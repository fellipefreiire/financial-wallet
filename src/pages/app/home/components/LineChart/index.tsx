import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ChartOptions, ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2'
import dayjs from 'dayjs'
import { getWeekDays } from '@/utils/getWeekDays'

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
  transactions: {
    data: number[]
  }
}

export function LineChart({ transactions }: LineChartProps) {
  // const dat = [1000, 850, 3000, 2300, 5000, 500, 600]
  const data: ChartData<'line'> = {
    labels: getWeekDays(),
    datasets: [
      {
        data: transactions.data,
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
    plugins: {
      legend: {
        display: false,
      },
      filler: {
        drawTime: 'beforeDatasetDraw',
        propagate: true
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      line: {
        borderWidth: 4,
        tension: 0,
        borderColor: 'green',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      },
      point: {
        radius: transactions.data.length > 1 ? 0 : 4,
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
        },
        offset: true,
      },
      y: {
        min: 0,
        max: transactions.data.length > 0 ? transactions.data.reduce((a, b) => Math.max(a, b)) + 100 : 100,
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
            } else if (Number(value) < 900) {
              return Number(value);
            }
          },
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