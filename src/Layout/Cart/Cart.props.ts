import React, { Dispatch, MutableRefObject } from "react"
import { CardProps } from "../../components/CardList/Card/Card.props"

export interface CartProps {
    cards: CardProps[]
    total: number
    withTax: number
    overlayRef: MutableRefObject<null>,
    hideOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export interface CartContainerProps {
    hideCart: Dispatch<React.SetStateAction<boolean>>
}
