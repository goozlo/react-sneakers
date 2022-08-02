import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, ICartState } from './types'

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
  // isLoading: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.cartItems.some(item => item.id === action.payload.id)
      if (findItem) state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
      else state.cartItems.push(action.payload)

      state.totalPrice = state.cartItems.reduce((acc, item) => (acc += item.price), 0)
    },
    clearCart(state) {
      state.cartItems = []
      state.totalPrice = 0
    },
  },
})

export const { getItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
