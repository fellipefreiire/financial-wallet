import { Eye, EyeClosed, List, User } from 'phosphor-react'
import * as S from './styles'
import { useConfig } from '@/store/useConfig'

interface IHeaderProps {
  isHome?: boolean
}

export const Header = ({ isHome = false }: IHeaderProps) => {
  const [isHide, toggleHide] = useConfig((state) => [
    state.isHide,
    state.toggleHide,
  ])

  return (
    <S.HeaderContainer>
      <div>
        <S.Circle>
          <User size={24} />
        </S.Circle>
        <span>Felipe Freire</span>
      </div>

      <div>
        {isHome && (
          <S.Circle onClick={toggleHide}>
            {isHide ? <EyeClosed size={24} /> : <Eye size={24} />}
          </S.Circle>
        )}
        <S.Circle>
          <List size={24} weight="bold" />
        </S.Circle>
      </div>
    </S.HeaderContainer>
  )
}
