import { Title, Checkbox, Liked } from ".."
import { getPrice } from "../../utils"
import style from "./Card.module.scss"
import { FC } from "react"
import { CardProps } from "./Card.props"

export const Card: FC<CardProps> = ({ label, price, imageUrl, checked, liked }) => {
    return (
        <div className={style.card}>
            <img src={imageUrl} width={133} height={112} alt="picture of sneakers"/>
            <Title size="onCard" children={label}/>
            <div className={style.wrapper}>
                <div className={style.price_wrapper}>
                    <span className={style.price}>Цена:</span>
                    <span className={style.price_currency}>{getPrice(price)}</span>
                </div>
                <Checkbox className={style.checkbox} checked={checked}/>
                <Liked className={style.liked} liked={liked}/>
            </div>
        </div>
    )
}

