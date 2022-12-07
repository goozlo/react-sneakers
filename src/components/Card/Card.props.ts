import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    _id: number
    label: string
    price: number
    imageUrl: string
    liked: boolean
    checked: boolean
}
