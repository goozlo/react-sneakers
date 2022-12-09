import style from "./Input.module.scss"
import { FC } from "react"
import { InputProps } from "./Input.props"
import Search from "./Search.svg"

export const Input: FC<InputProps> = ({ ...props }) => {
    return (
        <div className={style.inputDecorator}>
            <input className={style.input}  {...props}/>
            <Search className={style.icon}/>
        </div>
    )
}

