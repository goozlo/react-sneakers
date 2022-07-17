import React, { useState, useContext } from 'react'
import AppContext from '../context'
import styles from './Card.module.sass'

const Card = ({ displayItem, onChangeCart, onChangeFavorite }) => {
  const { cartItems, favorites } = useContext(AppContext)

  return (
    <>
      {
        <div className={styles.card}>
          <div className='favorite cu-p' onClick={() => onChangeFavorite(displayItem)}>
            <img
              width={32}
              height={32}
              src={
                favorites.some(item => item.itemId === displayItem.itemId)
                  ? '/img/liked.svg'
                  : '/img/unliked.svg'
              }
              alt='liked'
            />
          </div>
          <img width={133} height={112} src={displayItem.imageUrl} alt='sneakers' />
          <h5>{displayItem.title}</h5>
          <div className='d-flex justify-between  align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{displayItem.price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={() => onChangeCart(displayItem)}
              width={32}
              height={32}
              src={
                cartItems.some(item => item.itemId === displayItem.itemId)
                  ? '/img/btn-checked.svg'
                  : '/img/btn-plus.svg'
              }
              alt='plus'
            />
          </div>
        </div>
      }
    </>
  )
}

export default Card
