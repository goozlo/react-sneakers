import React, { FC } from "react"
import { HeaderProps } from "./Header.props"
import Logo from "./Logo.png"
import Cart from "./Cart.svg"
import Heart from "./Heart.svg"
import User from "./User.svg"
import cn from "classnames"
import style from "./Header.module.scss"

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <div className={cn(style.header, className)}>
            <img src={Logo} alt="logo" width={245} height={41}/>
            <div className={style.account}>
                <Cart className={style.icon}/>
                <Heart className={style.icon}/>
                <User className={style.icon}/>
            </div>
        </div>
    )
}

