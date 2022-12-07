import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<SVGElement>, SVGElement> {
    checked: boolean
}
