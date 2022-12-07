import React, { FC } from "react"
import { TitleProps } from "./Title.props"
import cn from "classnames"
import style from "./Title.module.scss"

export const Title: FC<TitleProps> = ({ size, children, className, ...props }) => {

    if (size === "main") {
        return <h2 className={cn(style.main, className)} {...props}>{children}</h2>
    }

    if (size === "secondary") {
        return <h3 className={cn(style.secondary, className)} {...props}>{children}</h3>
    }

    return <h4 className={cn(style.onCard, className)} {...props}>{children}</h4>
}

