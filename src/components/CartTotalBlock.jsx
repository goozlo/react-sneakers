const CartTotalblock = props => {
  return (
    <div className='cartTotalBlock'>
      <ul>
        <li>
          <span>Итого:</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className='greenButton'>
        Оформить заказ
        <img width={16} height={14} src='/img/arrow.svg' alt='arrow' />
      </button>
    </div>
  )
}

export default CartTotalblock
