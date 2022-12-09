import React, { FC } from "react"
import { Title } from "../.."
import { getPrice } from "../../../utils"
import { CardProps } from "../../CardList/Card/Card.props"
import Remove from "./Remove.svg"
import style from "./CartCard.module.scss"
import cn from "classnames"

export const CartCard: FC<Omit<CardProps, "checked" | "liked">> = ({ label, price, imageUrl, className, ...props }) => {
    return (
        <div className={cn(style.card, className)} {...props}>
            <img src={imageUrl} width={70} height={70} alt="picture of sneakers"/>
            <div>
                <Title size="onCard" children={label}/>
                <span className={style.price_currency}>{getPrice(price)}</span>
            </div>
            <Remove/>
        </div>
    )
}

