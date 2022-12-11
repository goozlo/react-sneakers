import React from "react"
import { Home } from "./Home"
import { useGetAllProductsQuery } from "../../redux/products/products"
import { ICard } from "../../core/models/card.model"

export const HomeContainer = () => {
    // todo
    const { data, isError, isLoading } = useGetAllProductsQuery("react-sneakers")

    const cards = (data as ICard[])?.map(item => ({
        ...item,
        checked: false,
        liked: false
    })) || []

    return <Home cards={cards}/>
}

