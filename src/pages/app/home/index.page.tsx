import * as S from './styles'
import { ReactElement } from 'react'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app.page'

const Home: NextPageWithLayout = () => {
  return (
    <S.HomeContainer>
      <div>teste</div>
    </S.HomeContainer>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

export default Home
