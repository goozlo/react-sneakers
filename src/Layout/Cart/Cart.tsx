import React, { FC } from "react"
import { CartCardList, Portal, Title, TotalPrice } from "../../components"
import style from "./Cart.module.scss"
import { Button } from "../../components/Button/Button"
import { CartProps } from "./Cart.props"

export const Cart: FC<CartProps> = ({ hideCart }) => {

    const overlayRef = React.useRef(null)

    const hideOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            hideCart(prev => !prev)
        }
    }

    return (
        <Portal>
            <div className={style.overlay} ref={overlayRef} onClick={hideOnClick}>
                <div className={style.cart}>
                    <Title className={style.title} size="main" children="Корзина"/>
                    <CartCardList/>
                    <div className={style.total}>
                        <TotalPrice about="Итого" price={21498}/>
                        <TotalPrice about="Налог 5%" price={1074} style={{ marginBottom: "10px" }}/>
                        <Button fullWidth={false} iconPosition="end" children="Оформить заказ"/>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

