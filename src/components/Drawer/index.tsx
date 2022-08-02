import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { getItem } from '../../redux/cart/slice'
import { toggleCart } from '../../redux/toggleCart/slice'
import calcTotalPrice from '../../hooks/calcTotalPrice'

import CartTotalblock from '../CartTotalBlock'
import Info from '../Info'

import styles from './Drawer.module.sass'

const Drawer = () => {
  const dispatch = useAppDispatch()
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const { cartItems } = useAppSelector(state => state.cart)
  const { isOpen } = useAppSelector(state => state.toggleCart)
  const { id } = useAppSelector(state => state.order)

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className='d-flex justify-between mb-30'>
          Корзина{' '}
          <img
            onClick={() => dispatch(toggleCart())}
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
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${id} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  )
}

export default Drawer
