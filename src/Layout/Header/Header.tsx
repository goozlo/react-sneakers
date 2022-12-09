import React, { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { HeaderProps } from "./Header.props"
import Logo from "./Logo.png"
import Cart from "./Cart.svg"
import Heart from "./Heart.svg"
import User from "./User.svg"
import cn from "classnames"
import style from "./Header.module.scss"

export const Header: FC<HeaderProps> = ({ className, toggleCart }) => {
    return (
        <div className={cn(style.header, className)}>

            <Link to="/">
                <img className={style.logo} src={Logo} alt="logo" width={245} height={41}/>
            </Link>

            <div className={style.account}>

                <span className={style.link}>
                    <Cart onClick={() => toggleCart(prev => !prev)}/>
                </span>

                <NavLink to="/liked">
                    {({ isActive }) => {
                        return (
                            <span className={cn(style.link, { [style.active]: isActive })}>
                                <Heart/>
                            </span>
                        )
                    }}
                </NavLink>

                <NavLink to="/bought">
                    {({ isActive }) => {
                        return (
                            <span className={cn(style.link, { [style.active]: isActive })}>
                                <User/>
                            </span>
                        )
                    }}
                </NavLink>

            </div>
        </div>
    )
}

