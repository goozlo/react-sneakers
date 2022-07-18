const CartTotalblock = ({ onGetOrder, totalPrice, isLoading }) => {
  return (
    <div className='cartTotalBlock'>
      <ul>
        <li>
          <span>Итого:</span>
          <div></div>
          <b>
            {String(Math.round(totalPrice * 1.02))
              .split('')
              .reverse()
              .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
              .reverse()
              .join('') + ' '}{' '}
            руб.
          </b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>
            {String(Math.round(totalPrice * 0.02))
              .split('')
              .reverse()
              .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
              .reverse()
              .join('') + ' '}{' '}
            руб.
          </b>
        </li>
      </ul>
      <button disabled={isLoading} className='greenButton' onClick={() => onGetOrder()}>
        Оформить заказ
        <img width={16} height={14} src='/img/arrow.svg' alt='arrow' />
      </button>
    </div>
  )
}

export default CartTotalblock
