import React, { FC } from "react"
import { Input, Title, Card } from "../../components"
import { HomeProps } from "./Home.props"
import style from "./Home.module.scss"

export const Home: FC<HomeProps> = ({ cards }) => {
    return (
        <>
            <div className={style.wrapper}>
                <Title size="main" children="Все кроссовки"/>
                <Input type="text" placeholder="Поиск..."/>
            </div>
            <div className={style.cards}>
                {cards.map(data => <Card key={data._id}{...data}/>)}
            </div>
        </>
    )
}

