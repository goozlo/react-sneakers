import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    size: "main" | "secondary" | "onCard"
    children: ReactNode
}
