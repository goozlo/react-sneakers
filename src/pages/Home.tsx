import React, { useState } from 'react'
import { useAppSelector } from '../redux/store'
import { filter } from '../hooks/useFilter'
import { StatusEnum } from '../redux/sneakers/types'

import ContentLoader from '../components/Card/ContentLoader'
import Card from '../components/Card'
import { useDebounce as Debounce } from '../hooks/useDebounce'

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const { items, status } = useAppSelector(state => state.sneakers)

  const onChangeSeacrhInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    Debounce(setSearchValue(event.target.value), 50000)

  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className='search-block d-flex'>
          <img src='/img/search.svg' alt='search' />
          <input
            maxLength={30}
            placeholder='Поиск...'
            onChange={onChangeSeacrhInput}
            value={searchValue}
          />
        </div>
      </div>

      <div className='d-flex flex-wrap'>
        {status === StatusEnum.SUCCESS &&
          filter(items, searchValue).map(item => <Card key={item.id} displayItem={item} />)}

        {status === StatusEnum.LOADING &&
          [...Array(8)].map((_, idx) => <ContentLoader key={idx} />)}
      </div>
    </div>
  )
}

export default Home
