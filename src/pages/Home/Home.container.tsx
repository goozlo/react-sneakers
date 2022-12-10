import React from "react"
import { Home } from "./Home"
import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { fetchProducts, productSelector } from "../../redux"
import { CardProps } from "../../components/Card/Card.props"

export const HomeContainer = () => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const cards: CardProps[] = useSelector(productSelector)

    return <Home cards={cards}/>
}

