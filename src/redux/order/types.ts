import { ICartItem } from '../cart/types'

export interface IOrderState {
  orderItems: (ICartItem | number)[]
  id: number
}
