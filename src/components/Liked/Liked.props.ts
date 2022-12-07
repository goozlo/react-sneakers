import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface LikedProps extends DetailedHTMLProps<HTMLAttributes<SVGElement>, SVGElement> {
    liked: boolean
}
