import { Input, Title, CardList } from "../../components"
import style from "./Home.module.scss"

export const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.wrapper}>
                <Title size="main" children="Мои закладки"/>
                <Input type="text" placeholder="Поиск..."/>
            </div>
            <CardList/>
        </div>
    )
}

