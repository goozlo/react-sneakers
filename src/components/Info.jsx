import { Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { toggleCart } from '../redux/toggleCart/slice'

const Info = ({ setIsOrderComplete = null, title, description, image }) => {
  const dispatch = useAppDispatch()

  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className='mb-20' width={setIsOrderComplete ? 120 : 70} src={image} alt='Empty' />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <Link to='/'>
        <button
          onClick={() => {
            dispatch(toggleCart())
            setIsOrderComplete(false)
          }}
          className='greenButton'
        >
          <img src='img/arrow.svg' alt='Arrow' />
          Вернуться назад
        </button>
      </Link>
    </div>
  )
}

export default Info
