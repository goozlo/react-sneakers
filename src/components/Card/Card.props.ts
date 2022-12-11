import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ICard } from "../../core/models/card.model"

export interface ICardWithMeta extends ICard {
    liked: boolean
    checked: boolean
}

export interface CardProps extends ICardWithMeta, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

