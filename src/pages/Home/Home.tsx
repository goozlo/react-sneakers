import style from "./Home.module.scss"
import { Input, Title } from "../../components"

export const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.wrapper}>
                <Title size="large" children="Мои закладки"/>
                <Input type="text" placeholder="Поиск..."/>
            </div>
        </div>
    )
}

