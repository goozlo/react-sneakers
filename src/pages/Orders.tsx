import { useAppSelector } from '../redux/store'
import Card from '../components/Card'
import Info from '../components/Info'

const Orders: React.FC = () => {
  const { orderItems } = useAppSelector(state => state.order)

  const filteredItems = orderItems
    .map(item => Object.values(item).filter(item => typeof item === 'object'))
    .flat()

  return (
    <div className='content p-40'>
      {!orderItems.length && (
        <Info
          title={'У вас нет заказов'}
          description={`Вы нищеброд? Оформите хотя бы один заказ.`}
          image={'/img/sad-smile.png'}
        />
      )}

      {orderItems.length > 0 && (
        <>
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Мои заказы</h1>
          </div>
          <div className='d-flex flex-wrap'>
            {filteredItems.map((item, idx) => (
              <Card key={idx} displayItem={item} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Orders
