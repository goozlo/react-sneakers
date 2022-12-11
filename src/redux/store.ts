import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { productsApi } from "./products/products"
import { cart } from "./cart"
import { liked } from "./liked"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart,
        liked
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action>

