import React from "react"
import { getItems } from "../../hooks"
import { CartCard } from "./CartCard/CartCard"
import { CardProps } from "../CardList/Card/Card.props"
import style from "./CartCardList.module.scss"

export const CartCardList = () => {
    const cards: CardProps[] = getItems("react-sneakers")

    return (
        <div className={style.cards}>
            {cards.map(data => <CartCard className={style.card} key={data._id} {...data}/>)}
        </div>
    )
}

