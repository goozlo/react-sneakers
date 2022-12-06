import React, { FC } from "react"
import { TitleProps } from "./Title.props"
import cn from "classnames"
import style from "./Title.module.scss"

export const Title: FC<TitleProps> = ({ size, children, className, ...props }) => {

    if (size === "small") {
        return <h2 className={cn(style.small, className)} {...props}>{children}</h2>
    }

    return <h3 className={cn(style.large, className)} {...props}>{children}</h3>
}

