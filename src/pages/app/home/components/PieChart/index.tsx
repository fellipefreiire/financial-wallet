import { Chart, ArcElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ChartOptions, ChartData } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import * as S from './styles'

export const datas = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const dats = [
  {
    category: 'Education',
    color: ''
  },
  {
    category: 'Trip',
    color: ''
  },
  {
    category: 'Health',
    color: ''
  },
  {
    category: 'Work',
    color: ''
  },
  {
    category: 'Games',
    color: ''
  },
  {
    category: 'Shopping',
    color: 'rgba(255, 206, 86, 1)'
  },
  {
    category: 'Salário',
    color: 'rgba(54, 162, 235, 1)'
  },
  {
    category: 'Casa',
    color: 'rgba(255, 99, 132, 1)'
  },
  {
    category: 'Others',
    color: ''
  },
]

Chart.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any
}

export function PieChart({ data }: PieChartProps) {

  const b = data.labels.reduce((acc, curr) => {
    const a = dats.find((dat) => dat.category === curr)
    acc.push(a?.color)
    return acc
  },
    []
  )

  const datas = {
    labels: data.labels,
    datasets: [
      {
        label: '# of Votes',
        data: data.data,
        backgroundColor: b,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <S.ChartContainer>
      <Pie data={datas} />
    </S.ChartContainer>
  )
}