import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { initialState } from "./products.state"
import { AppThunk, RootState } from "../store"
import { CardProps } from "../../components/CardList/Card/Card.props"
import { productsApi } from "../../hooks"

export const fetchProducts = createAsyncThunk<AppThunk>(
    "products",
    async (arg, thunkAPI) => {
        return await productsApi("react-sneakers")
    })

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // @ts-ignore todo
            state.products = (action.payload as unknown as CardProps[]).map(item => ({
                ...item,
                checked: false,
                liked: false
            }))
            state.loading = false
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.products = []
            state.loading = true
        })
    }
})

export const { reducer } = productSlice
export const productSelector = (state: RootState) => state.products.products
