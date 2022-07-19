import Card from '../components/Card'

const Favorites = ({ favoriteItems, onChangeCart, onChangeFavorite }) => {
  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Мои закладки</h1>
      </div>

      <div className='d-flex flex-wrap'>
        {favoriteItems.map(item => (
          <Card
            key={item.itemId}
            displayItem={item}
            onChangeCart={onChangeCart}
            onChangeFavorite={onChangeFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
