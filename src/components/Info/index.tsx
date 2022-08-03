import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { getOrder } from '../../redux/order/slice'
import { toggleCart } from '../../redux/toggleCart/slice'

type Props = { title: string; description: string; image: string }

const Info: React.FC<Props> = ({ title, description, image }) => {
  const dispatch = useAppDispatch()

  const { isCompleted } = useAppSelector(state => state.order)
  const { isOpen } = useAppSelector(state => state.toggleCart)

  const clickToBack = () => {
    isOpen && dispatch(toggleCart())
    isCompleted && dispatch(getOrder(null))
  }

  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className='mb-20' width={isCompleted ? 120 : 70} src={image} alt='Empty' />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <Link to='/'>
        <button onClick={() => clickToBack()} className='greenButton'>
          <img src='img/arrow.svg' alt='Arrow' />
          Вернуться назад
        </button>
      </Link>
    </div>
  )
}

export default Info
