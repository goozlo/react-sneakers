import React, { FC } from "react"
import { Header } from "."
import { LayoutProps } from "./Layout.props"
import style from "./Layout.module.scss"


export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={style.layout}>
            <Header className={style.header}/>
            <div className={style.main}>
                {children}
            </div>
        </div>
    )
}
