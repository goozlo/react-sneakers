import React, { FC } from "react"
import { Cart } from "./Cart"
import { useAppDispatch } from "../../redux/store"
import { fetchCart } from "../../redux/cart"
import { useSelector } from "react-redux"
import { CartContainerProps } from "./Cart.props"
import { cartSelector } from "../../redux/cart/cart"

export const CartContainer: FC<CartContainerProps> = ({ hideCart }) => {
    const dispatch = useAppDispatch()
    const overlayRef = React.useRef(null)

    React.useEffect(() => {
        dispatch(fetchCart())
    }, [])

    const hideOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            hideCart(prev => !prev)
        }
    }

    const cards = useSelector(cartSelector).cart
    const total = useSelector(cartSelector).total
    const withTax = ~~(total * .05)

    return (
        <Cart
            cards={cards}
            total={total}
            withTax={withTax}
            hideOnClick={hideOnClick}
            overlayRef={overlayRef}
        />
    )
}

