import { ICartItem } from '../redux/cart/types'

type filterType = (items: ICartItem[], str: string) => ICartItem[]

export const filter: filterType = (items = [], str) =>
  items.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
