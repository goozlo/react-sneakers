import React, { useState, Fragment } from 'react'
import ContentLoader from '../components/ContentLoader'
import Card from '../components/Card'

const Home = ({ items, onChangeCart, onChangeFavorite, isLoading }) => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeSeacrhInput = event => {
    setSearchValue(event.target.value)
  }

  const filterLoading = (arr, findItem, isReady) => {
    return isReady
      ? [...Array(8)]
      : arr.filter(item => item.title.toLowerCase().includes(findItem.toLowerCase()))
  }

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
        {filterLoading(items, searchValue, isLoading).map((item, index) => (
          <Fragment key={isLoading ? index : item.itemId}>
            {isLoading && <ContentLoader />}
            {!isLoading && (
              <Card
                displayItem={item}
                onChangeCart={onChangeCart}
                onChangeFavorite={onChangeFavorite}
                isLoading={isLoading}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Home
