import TotalPriceCalc from '../hooks/TotalPticeCalc'

const CartTotalblock = ({ onGetOrder, totalPrice, isLoading }) => {
  return (
    <div className='cartTotalBlock'>
      <ul>
        <li>
          <span>Итого:</span>
          <div></div>
          <b>{TotalPriceCalc(totalPrice, 1.02)}</b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>{TotalPriceCalc(totalPrice, 0.02)}</b>
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
