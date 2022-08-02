import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../cart/types'
import { IFavoriteState } from './types'

const initialState: IFavoriteState = {
  favoriteItems: [],
  // isLoading: false,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    getFavoriteItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.favoriteItems.some(item => item.id === action.payload.id)
      if (findItem)
        state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload.id)
      else state.favoriteItems.push(action.payload)
    },
  },
})

export const { getFavoriteItem } = favoritesSlice.actions

export default favoritesSlice.reducer
