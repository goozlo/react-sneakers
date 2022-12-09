import React, { FC } from "react"
import { TotalPriceProps } from "./TotalPrice.props"
import style from "./TotalPrice.module.scss"
import { getPrice } from "../../utils"
import cn from "classnames"

export const TotalPrice: FC<TotalPriceProps> = ({ about, price, className, ...props }) => {
    return (
        <div className={cn(style.wrapper, className)} {...props}>
            <span className={style.about}>{`${about}:`}</span>
            <span className={style.dashed}/>
            <span className={style.price_currency}>{getPrice(price)}</span>
        </div>
    )
}

