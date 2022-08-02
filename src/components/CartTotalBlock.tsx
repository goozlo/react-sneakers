import { useAppDispatch, useAppSelector } from '../redux/store'
import { getOrder } from '../redux/order/slice'
import calcTotalPrice from '../hooks/calcTotalPrice'
import { clearCart } from '../redux/cart/slice'

const CartTotalblock = () => {
  const dispatch = useAppDispatch()
  const { cartItems, totalPrice } = useAppSelector(state => state.cart)

  const ClickOrder = () => {
    dispatch(getOrder(cartItems))
    dispatch(clearCart())
  }

  return (
    <div className='cartTotalBlock'>
      <ul>
        <li>
          <span>Итого:</span>
          <div></div>
          <b>{calcTotalPrice(totalPrice * 1.02)}</b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>{calcTotalPrice(totalPrice * 0.02)}</b>
        </li>
      </ul>
      <button disabled={false} className='greenButton' onClick={() => ClickOrder()}>
        Оформить заказ
        <img width={16} height={14} src='/img/arrow.svg' alt='arrow' />
      </button>
    </div>
  )
}

export default CartTotalblock
