import { createSlice } from '@reduxjs/toolkit'

const initialState: { isOpen: Boolean } = {
  isOpen: false,
}

const toggleCartSlicer = createSlice({
  name: 'toggleCart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleCart } = toggleCartSlicer.actions

export default toggleCartSlicer.reducer
