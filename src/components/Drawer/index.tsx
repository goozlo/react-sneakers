import { useAppSelector, useAppDispatch } from '../../redux/store'
import { getItem } from '../../redux/cart/slice'
import { toggleCart } from '../../redux/toggleCart/slice'
import { getOrder } from '../../redux/order/slice'
import calcTotalPrice from '../../hooks/calcTotalPrice'

import CartTotalblock from '../CartTotalBlock'
import Info from '../Info'

import styles from './Drawer.module.sass'

const Drawer: React.FC = () => {
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector(state => state.cart)
  const { isOpen } = useAppSelector(state => state.toggleCart)
  const { id, isCompleted } = useAppSelector(state => state.order)

  const clickToClose = () => {
    dispatch(toggleCart())
    isCompleted && dispatch(getOrder(null))
  }

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className='d-flex justify-between mb-30'>
          Корзина{' '}
          <img
            onClick={() => clickToClose()}
            className='cu-p'
            src='/img/btn-remove.svg'
            alt='remove'
          />
        </h2>

        {cartItems.length > 0 && (
          <>
            <div className={`${styles.items} + flex`}>
              {cartItems.map(item => (
                <div key={item.id} className='cartItem d-flex align-center mb-20'>
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className='cartItemImg'
                  />
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{item.name}</p>
                    <b>{calcTotalPrice(item.price)}</b>
                  </div>
                  <img
                    onClick={() => dispatch(getItem(item))}
                    className='removeBtn'
                    src='/img/btn-remove.svg'
                    alt='remove'
                  />
                </div>
              ))}
            </div>
            <CartTotalblock />
          </>
        )}

        {!cartItems.length && (
          <Info
            title={isCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isCompleted
                ? `Ваш заказ #${id} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isCompleted ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  )
}

export default Drawer
