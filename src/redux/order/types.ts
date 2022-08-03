import { ICartItem } from '../cart/types'

interface IOrderItems {
  id: number
  items: [ICartItem[]]
}

export interface IOrderState {
  orderItems: IOrderItems[]
  id: number
  isCompleted: Boolean
}
