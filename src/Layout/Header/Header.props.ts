import { Dispatch, SetStateAction } from "react"

export interface HeaderProps {
    className: string
    toggleCart: Dispatch<SetStateAction<boolean>>
}
