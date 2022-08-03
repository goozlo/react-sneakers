import { useAppSelector } from '../redux/store'

import Card from '../components/Card'
import Info from '../components/Info'

const Favorites = () => {
  const { favoriteItems } = useAppSelector(state => state.favorites)

  return (
    <div className='content p-40'>
      {!favoriteItems.length && (
        <Info
          title={'Закладок нет :('}
          description={'Вы ничего не добавляли в закладки'}
          image={'/img/sad-smile.png'}
        />
      )}

      {favoriteItems.length > 0 && (
        <>
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Мои закладки</h1>
          </div>
          <div className='d-flex flex-wrap'>
            {favoriteItems.map(item => (
              <Card key={item.id} displayItem={item} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Favorites
