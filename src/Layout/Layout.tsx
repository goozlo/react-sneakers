import React, { FC } from "react"
import { Header, Cart } from "."
import { Outlet } from "react-router"
import style from "./Layout.module.scss"

export const Layout: FC = (): JSX.Element => {
    const [cartVisible, setCartVisible] = React.useState(false)

    return (
        <div className={style.layout}>
            <Header className={style.header} toggleCart={setCartVisible}/>
            <div className={style.main}>
                <Outlet/>
            </div>
            {cartVisible && <Cart hideCart={setCartVisible}/>}
        </div>
    )
}
