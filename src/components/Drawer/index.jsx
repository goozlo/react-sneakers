import React, { useState } from 'react'
import CartTotalblock from '../CartTotalBlock'
import Info from '../Info'
import styles from './Drawer.module.sass'

const Drawer = ({ items = [], onCloseCart, onChangeCart }) => {
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className='d-flex justify-between mb-30'>
          Корзина{' '}
          <img onClick={onCloseCart} className='cu-p' src='/img/btn-remove.svg' alt='remove' />
        </h2>

        {items.length > 0 && (
          <>
            <div className={`${styles.items} + flex`}>
              {items.map(obj => (
                <div key={obj.id} className='cartItem d-flex align-center mb-20'>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className='cartItemImg'
                  />
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onChangeCart(obj)}
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

        {items.length === 0 && (
          <Info
            onCloseCart={onCloseCart}
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
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
