import { Link } from 'react-router-dom'

const Header = props => {
  const totalPrice = props.cartItems.reduce((acc, item) => (acc += +item.price), 0)

  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to='/'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' alt='logo' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className='d-flex'>
          <li className='mr-30 cu-p' onClick={props.onClickCart}>
            <img width={18} height={18} src='/img/cart.svg' alt='Корзина' />
            <span>
              {String(Math.round(totalPrice))
                .split('')
                .reverse()
                .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
                .reverse()
                .join('') + ' '}{' '}
              руб.
            </span>
          </li>
          <li className='mr-20 cu-p'>
            <Link to='/favorites'>
              <img width={20} height={20} src='/img/heart.svg' alt='Закладки' />
            </Link>
          </li>
          <li>
            <Link to='/user'>
              <img width={20} height={20} src='/img/user.svg' alt='Пользователь' />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
