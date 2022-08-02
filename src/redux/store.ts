import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import cart from './cart/slice'
import favorites from './favorites/slice'
import sneakers from './sneakers/slice'
import toggleCart from './toggleCart/slice'
import order from './order/slice'

export const store = configureStore({
  reducer: { cart, favorites, sneakers, toggleCart, order },
})

type RootState = ReturnType<typeof store.getState> // типизация стэйтов
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type AppDispatch = typeof store.dispatch // типизация диспатчера
export const useAppDispatch: () => AppDispatch = useDispatch
