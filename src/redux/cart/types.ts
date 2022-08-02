export interface ICartState {
  cartItems: ICartItem[]
  totalPrice: number
}

export interface ICartItem {
  id: string
  name: string
  price: number
  imageUrl: string
}
