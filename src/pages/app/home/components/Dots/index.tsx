import * as S from './styles'

interface IDotsProps {
  variant: 'sm' | 'sm2' | 'md' | 'md2' | 'lg'
}

export const Dots = ({ variant }: IDotsProps) => {
  return (
    <S.DotsContainer>
      <S.Dot variant={variant} />
      <S.Dot variant={variant} />
      <S.Dot variant={variant} />
      <S.Dot variant={variant} />
    </S.DotsContainer>
  )
}
