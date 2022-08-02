import { ICartItem } from '../cart/types'

export enum StatusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IGetItemsState {
  items: ICartItem[]
  status: StatusEnum
}
