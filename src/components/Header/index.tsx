import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { toggleCart } from '../../redux/toggleCart/slice'
import calcTotalPrice from '../../hooks/calcTotalPrice'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { totalPrice } = useAppSelector(state => state.cart)

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
          <li className='mr-30 cu-p' onClick={() => dispatch(toggleCart())}>
            <img width={18} height={18} src='/img/cart.svg' alt='Корзина' />
            <span>{calcTotalPrice(totalPrice)}</span>
          </li>
          <li className='mr-20 cu-p'>
            <Link to='/favorites'>
              <img width={20} height={20} src='/img/heart.svg' alt='Закладки' />
            </Link>
          </li>
          <li>
            <Link to='/orders'>
              <img width={20} height={20} src='/img/user.svg' alt='Пользователь' />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
