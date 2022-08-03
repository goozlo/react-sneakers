import { createSlice } from '@reduxjs/toolkit'
import { IOrderState } from './types'

const initialState: IOrderState = {
  orderItems: [],
  id: 1,
  isCompleted: false,
}

const orderSlicer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrder(state, action) {
      if (!state.isCompleted) {
        ++state.id
        state.orderItems.push({ ...action.payload, id: state.id })
      }
      state.isCompleted = !state.isCompleted
    },
  },
})

export const { getOrder } = orderSlicer.actions

export default orderSlicer.reducer
