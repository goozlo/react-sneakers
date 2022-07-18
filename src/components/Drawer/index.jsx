import React, { useState } from 'react'
import axios from 'axios'
import CartTotalblock from '../CartTotalBlock'
import Info from '../Info'
import styles from './Drawer.module.sass'

const Drawer = ({ items = [], cartItems, setCartItems, onCloseCart, onChangeCart }) => {
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const url = 'https://62d15e83dccad0cf176623b6.mockapi.io'

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onGetOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(`${url}/orders`, { items: cartItems })
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(`${url}/cart/${item.id}`)
        await delay(1000)
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(')
    }
    setIsLoading(false)
  }

  const totalPrice = cartItems.reduce((acc, item) => (acc += +item.price), 0)

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
                <div key={obj.itemId} className='cartItem d-flex align-center mb-20'>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className='cartItemImg'
                  />
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>
                      {`${obj.price}`
                        .split('')
                        .reverse()
                        .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
                        .reverse()
                        .join('') + ' '}
                      руб.
                    </b>
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
            <CartTotalblock onGetOrder={onGetOrder} totalPrice={totalPrice} isLoading={isLoading} />
          </>
        )}

        {!items.length && (
          <Info
            setOrderId={setOrderId}
            onCloseCart={onCloseCart}
            setIsOrderComplete={setIsOrderComplete}
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
