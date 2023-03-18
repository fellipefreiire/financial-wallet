import * as Collapsible from '@radix-ui/react-collapsible'
import { List } from 'phosphor-react'

import * as S from './styles'

export const Header = () => {

  return (
    <S.HeaderContainer>
      <S.ButtonContainer>
        <Collapsible.Trigger>
          <List size={24} />
        </Collapsible.Trigger>
      </S.ButtonContainer>
    </S.HeaderContainer>
  )
}
