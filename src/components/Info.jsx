import React from 'react'

const Info = ({ onCloseCart, setIsOrderComplete, title, description, image }) => {
  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className='mb-20' width='120px' src={image} alt='Empty' />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
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
    </div>
  )
}

export default Info
