import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../store"
import { ICard } from "../../core/models/card.model"
// import { productsApi } from "../../core/hooks"
import { initialState } from "./liked.state"

// export const fetchLiked = createAsyncThunk<AppThunk>(
//     "liked",
//     async (arg, thunkAPI) => {
//         // return await productsApi("liked")
//     })

const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        addToLiked(state, action: PayloadAction<{ id: number }>) {


        },
        removeFromLiked(state, action: PayloadAction<{ id: number }>) {
            state.liked.filter(item => item._id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchLiked.pending, (state) => {
        //     state.loading = true
        // })
        // builder.addCase(fetchLiked.fulfilled, (state, action) => {
        //     state.liked = action.payload as unknown as ICard[]
        //     state.loading = false
        // })
        // builder.addCase(fetchLiked.rejected, (state) => {
        //     state.liked = []
        //     state.loading = true
        // })
    }
})

export const { addToLiked, removeFromLiked } = likedSlice.actions
export const { reducer } = likedSlice
export const likedSelector = (state: RootState) => state.liked
