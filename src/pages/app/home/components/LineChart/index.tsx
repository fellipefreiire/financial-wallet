import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { Line } from 'react-chartjs-2'
import dayjs from 'dayjs'
import { getWeekDays } from '@/utils/getWeekDays'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

interface LineChartProps {
  transactions: Transaction[]
}

type Teste = {
  labels: number[]
  data: number[]
}

export function LineChart({ transactions }: LineChartProps) {
  const transformedTransactions = transactions.map((transaction) => {
    return {
      labels: new Date(transaction.date).getDay(),
      dataset: transaction.value,
    }
  })
  const t = transactions.reduce<Teste>((acc, curr, i) => {
    const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

    const date = dayjs(curr.date)
    // console.log(date.get('year'))
    // console.log(date.get('month'))
    // console.log(date.daysInMonth())
    // const b = getWeek(date.get('year'), date.get('month'), date.daysInMonth())
    // console.log(b)
    acc.labels.push(new Date(curr.date).getDay())
    acc.data.push(curr.value)

    return acc
  }, {
    labels: [],
    data: []
  })

  const data = {
    labels: getWeekDays(),
    datasets: [
      {
        data: [100, 200, 150, 300, 200, 50, 0]
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: 'rgba(47, 97, 68, 1)',
        fill: 'start',
        backgroundColor: 'rgba(47, 97, 68, 0.3)',
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      }
    }
  }
  return (
    <div>
      <Line data={data} width={800} height={300} options={options} />
    </div>
  )
}