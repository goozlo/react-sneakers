import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICard } from "../../core/models/card.model"

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_DATA_URL as string }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<ICard[], string>({
            query: (name) => name
        })
    })
})

export const { useGetAllProductsQuery } = productsApi
