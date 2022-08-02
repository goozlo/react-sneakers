import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../cart/types'
import { IGetItemsState, StatusEnum } from './types'
import axios from 'axios'

export const fetchItems = createAsyncThunk<ICartItem[]>('sneakers/fetchItemsStatus', async () => {
  const { data } = await axios.get('https://62d15e83dccad0cf176623b6.mockapi.io/items')
  return data
})

const initialState: IGetItemsState = {
  items: [],
  status: StatusEnum.LOADING,
}

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload.data
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchItems.pending, state => {
      state.items = []
      state.status = StatusEnum.LOADING
    })

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = StatusEnum.SUCCESS
    })

    builder.addCase(fetchItems.rejected, state => {
      state.items = []
      state.status = StatusEnum.ERROR
    })
  },
})

export const { setItems } = sneakersSlice.actions
export default sneakersSlice.reducer
