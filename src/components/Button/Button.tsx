import React, { FC } from "react"
import { ButtonProps } from "./Button.props"
import Arrow from "./Arrow.svg"
import style from "./Button.module.scss"

export const Button: FC<ButtonProps> = ({ fullWidth, iconPosition, children }) => {
    console.log(iconPosition)
    return (
        <div className={style.button} style={fullWidth ? { width: "fit-content" } : {}}>
            {iconPosition === "start" && <Arrow style={{ rotate: "180deg" }}/>}
            <span className={style.content}>{children}</span>
            {iconPosition === "end" && <Arrow/>}
        </div>
    )
}

