import { Title, Card } from "../../components"
import { ICard } from "../../core/models/card.model"
import { useSelector } from "react-redux"
import { likedSelector } from "../../redux/liked/liked"
import { cartService } from "../../redux/cart"
import style from "./Liked.module.scss"

export const Liked = () => {
    const cards: ICard[] = useSelector(likedSelector).liked

    return (
        <>
            <div className={style.wrapper}>
                <Title size="main" children="Мои закладки"/>
            </div>
            <div className={style.cards}>
                {/*{cards.map(data => <Card key={data._id} addToCart={cartService.addToCart} {...data}/>)}*/}
            </div>
        </>
    )
}

