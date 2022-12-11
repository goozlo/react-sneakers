import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "./cart.state"
import { AppThunk, RootState } from "../store"
import { fetchProducts } from "../../core/hooks"
import { ICard } from "../../core/models/card.model"

export const fetchCart = createAsyncThunk<AppThunk>(
    "cart",
    async (arg, thunkAPI) => {
        return await fetchProducts("cart")
    })

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action: PayloadAction<{ id: number }>) {

        },
        remove(state, action: PayloadAction<{ id: number }>) {
            state.cart.filter(item => item._id !== action.payload.id)
            state.total = state.cart.reduce((acc, item) => acc += item.price, 0)
        },
        removeAll(state) {
            state.cart = []
            state.total = 0
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cart = action.payload as unknown as ICard[]
            state.total = state.cart.reduce((acc, item) => acc += item.price, 0)
            state.loading = false
        })
        builder.addCase(fetchCart.rejected, (state) => {
            state.cart = []
            state.total = 0
            state.loading = true
        })
    }
})

export const { add, remove, removeAll } = cartSlice.actions
export const { reducer } = cartSlice
export const cartSelector = (state: RootState) => state.cart
















