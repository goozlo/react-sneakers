import React, { FC } from "react"
import { Cart } from "./Cart"
import { useAppDispatch } from "../../redux/store"
import { fetchProducts, productSelector } from "../../redux"
import { useSelector } from "react-redux"
import { CartContainerProps } from "./Cart.props"

export const CartContainer: FC<CartContainerProps> = ({ hideCart }) => {
    const dispatch = useAppDispatch()

    const overlayRef = React.useRef(null)

    const hideOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            hideCart(prev => !prev)
        }
    }

    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const filteredCards = useSelector(productSelector).filter(item => item.checked)

    const total = filteredCards.reduce((acc, item) => acc += item.price, 0)
    const withTax = ~~(total * .05)

    return (
        <Cart
            cards={filteredCards}
            total={total}
            withTax={withTax}
            hideOnClick={hideOnClick}
            overlayRef={overlayRef}
        />
    )
}

