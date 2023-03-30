import Image from 'next/image'
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
  const cardFlag = 'mastercard'

  function getCardFlag(cardFlag: string) {
    switch (cardFlag) {
      case 'mastercard': {
        return '/mastercard_logo.svg'
      }
      case 'hipercard': {
        return '/hipercard_logo.svg'
      }
      case 'elo': {
        return '/elo_logo.svg'
      }
      case 'visa': {
        return '/visa_logo.svg'
      }
      default: {
        return ''
      }
    }
  }

  const src = getCardFlag(cardFlag)

  return (
    <S.CreditCardContainer onClick={props.onClick} data-position={props.cardPosition} data-position-gt={dataGt}>
      <div>
        {/* <Image src="/hipercard_logo.svg" width={80} height={80} alt="" /> */}
        <Image src={src} width={80} height={80} alt="" />
      </div>
      <div>
        <span>**** **** **** {props.number}</span>
        <span>08/27</span>
      </div>
    </S.CreditCardContainer>
  )
}