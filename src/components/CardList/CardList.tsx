import React from "react"
import { getItems } from "../../hooks"
import { Card } from "./Card/Card"
import { CardProps } from "./Card/Card.props"
import style from "./CardList.module.scss"

export const CardList = () => {
    const cards: CardProps[] = getItems("react-sneakers")

    return (
        <div className={style.cards}>
            {cards.map(data => <Card key={data._id} {...data}/>)}
        </div>
    )
}

