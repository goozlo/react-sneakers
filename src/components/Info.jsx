import React from 'react'
import { Link } from 'react-router-dom'

const Info = ({ onCloseCart, setIsOrderComplete = null, title, description, image }) => {
  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className='mb-20' width={setIsOrderComplete ? 120 : 70} src={image} alt='Empty' />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <Link to='/'>
        <button
          onClick={() => {
            setIsOrderComplete(false)
            onCloseCart()
          }}
          className='greenButton'
        >
          <img src='img/arrow.svg' alt='Arrow' />
          Вернуться назад
        </button>
      </Link>
    </div>
  )
}

export default Info
