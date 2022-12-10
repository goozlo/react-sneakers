import React, { FC } from "react"
import { CartCard, Button, Portal, Title, TotalPrice } from "../../components"
import { CartProps } from "./Cart.props"
import style from "./Cart.module.scss"

export const Cart: FC<CartProps> = ({ cards, total, withTax, hideOnClick, overlayRef }) => {
    return (
        <Portal>
            <div className={style.overlay} ref={overlayRef} onClick={hideOnClick}>
                <div className={style.cart}>
                    <Title className={style.title} size="main" children="Корзина"/>
                    <div className={style.cards}>
                        {cards.map(data => <CartCard className={style.card} key={data._id} {...data}/>)}
                    </div>
                    <div className={style.total}>
                        <TotalPrice about="Итого" price={total}/>
                        <TotalPrice about="Налог 5%" price={withTax} style={{ marginBottom: "10px" }}/>
                        <Button fullWidth={false} iconPosition="end" children="Оформить заказ"/>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

