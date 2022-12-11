import React, { Dispatch, MutableRefObject } from "react"
import { ICard } from "../../core/models/card.model"

export interface CartProps {
    cards: Omit<ICard, "checked" | "liked">[]
    total: number
    withTax: number
    overlayRef: MutableRefObject<null>,
    hideOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export interface CartContainerProps {
    hideCart: Dispatch<React.SetStateAction<boolean>>
}
