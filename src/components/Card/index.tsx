import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { getItem } from '../../redux/cart/slice'
import { getFavoriteItem } from '../../redux/favorites/slice'
import { ICartItem } from '../../redux/cart/types'
import { useLocation } from 'react-router-dom'
import calcTotalPrice from '../../hooks/calcTotalPrice'

import styles from './Card.module.sass'

const Card: React.FC<{ displayItem: ICartItem }> = ({ displayItem }) => {
  const dispatch = useAppDispatch()

  const { cartItems } = useAppSelector(state => state.cart)
  const { favoriteItems } = useAppSelector(state => state.favorites)

  const { pathname } = useLocation()

  return (
    <>
      {
        <div className={styles.card}>
          <div className='favorite cu-p' onClick={() => dispatch(getFavoriteItem(displayItem))}>
            {pathname !== '/orders' && (
              <img
                width={32}
                height={32}
                src={
                  favoriteItems.some(item => item.id === displayItem.id)
                    ? '/img/liked.svg'
                    : '/img/unliked.svg'
                }
                alt='liked'
              />
            )}
          </div>
          <img width={133} height={112} src={displayItem.imageUrl} alt='sneakers' />
          <h5>{displayItem.name}</h5>
          <div className='d-flex justify-between  align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{calcTotalPrice(displayItem.price)}</b>
            </div>
            {pathname !== '/orders' && (
              <img
                className={styles.plus}
                onClick={() => dispatch(getItem(displayItem))}
                width={32}
                height={32}
                src={
                  cartItems.some(item => item.id === displayItem.id)
                    ? '/img/btn-checked.svg'
                    : '/img/btn-plus.svg'
                }
                alt='plus'
              />
            )}
          </div>
        </div>
      }
    </>
  )
}

export default Card
