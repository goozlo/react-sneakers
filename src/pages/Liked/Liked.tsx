import { Title, CardList } from "../../components"
import style from "./Liked.module.scss"

export const Liked = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Title size="main" children="Мои закладки"/>
            </div>
            <CardList/>
        </>
    )
}

