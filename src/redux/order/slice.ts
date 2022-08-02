import { createSlice } from '@reduxjs/toolkit'
import { IOrderState } from './types'

const initialState: IOrderState = {
  orderItems: [],
  id: 0,
}

const orderSlicer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrder(state, action) {
      ++state.id
      state.orderItems.push({ ...action.payload, id: state.id })
    },
  },
})

export const { getOrder } = orderSlicer.actions

export default orderSlicer.reducer
