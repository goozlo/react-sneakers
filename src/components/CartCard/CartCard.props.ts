import { ICard } from "../../core/models/card.model"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface CartCardProps extends Omit<ICard, "checked" | "liked">, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
