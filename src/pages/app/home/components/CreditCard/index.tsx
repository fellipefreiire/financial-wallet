import * as S from './styles'

interface CreditCardProps extends React.HTMLProps<HTMLDivElement> {
  number: number
  // isActive: boolean
  // isLeft: boolean
  // isRight: boolean
  cardPosition: number
}

function getDataValues(value: number) {
  const values = []

  for (var i = value; i > 0; i--) {
    const op = value - i

    if (op !== 0) values.push(op)
  }

  return values.join(" ")
}

export function CreditCard(props: CreditCardProps) {
  // console.log(props.cardPosition)

  const dataGt = getDataValues(props.cardPosition)
  // console.log(a)
  return (
    <S.CreditCardContainer onClick={props.onClick} data-position={props.cardPosition} data-position-gt={dataGt}>
      <div>
        **** **** **** {props.number}
      </div>
    </S.CreditCardContainer>
  )
}