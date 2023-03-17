import type { NextPage } from 'next'
import { CaretLeft } from 'phosphor-react'
import * as Phosphor from 'phosphor-react'
import * as S from './styles'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { useEffect } from 'react'
import { useConfig } from '@/store/useConfig'

const Categories: NextPage = () => {
  const [categories, toggleCategoryActivity] = useConfig((state) => [
    state.categories,
    state.toggleCategoryActivity,
  ])

  useEffect(() => {}, [categories])

  const categoriesCopy = [...categories]

  const sortedCategories = categoriesCopy.sort((a, b) =>
    a.label > b.label ? 1 : b.label > a.label ? -1 : 0,
  )

  return (
    <S.CategoriesContainer>
      <Header />

      <S.BackButton>
        <Link href="/app/config">
          <CaretLeft size={32} color="white" />
        </Link>
      </S.BackButton>

      <S.CategoryList>
        <h1>Categorias</h1>
        {sortedCategories.map((category) => {
          // @ts-ignore
          const Icon = Phosphor[category.icon]
          return (
            <S.Category
              key={category.id}
              data-active={category.active}
              onClick={() =>
                toggleCategoryActivity(category.id, category.active)
              }
            >
              <div>
                <Icon size={24} color="#6886D5" />
                <span>{category.label}</span>
              </div>
              <span>{category.type}</span>
            </S.Category>
          )
        })}
      </S.CategoryList>
    </S.CategoriesContainer>
  )
}

export default Categories
