import { Title, Card } from "../../components"
import style from "./Bought.module.scss"

export const Bought = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Title size="main" children="Мои покупки"/>
            </div>
            {/*<CardList/>*/}
        </>
    )
}

