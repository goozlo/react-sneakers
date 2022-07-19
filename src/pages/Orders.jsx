import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ContentLoader from '../components/ContentLoader'
import Card from '../components/Card'
import Info from '../components/Info'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url = 'https://62d15e83dccad0cf176623b6.mockapi.io'

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(`${url}/orders`)
        setOrders(
          data
            .map(obj => obj.items)
            .flat()
            .reverse()
        )
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запроск заказов!')
      }
    })()
  }, [])

  return (
    <div className='content p-40'>
      {!orders.length && (
        <Info
          onCloseCart={null}
          setIsOrderComplete={null}
          title={'У вас нет заказов'}
          description={`Вы нищеброд? Оформите хотя бы один заказ.`}
          image={'/img/sad-smile.png'}
        />
      )}

      {orders.length > 0 && (
        <>
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Мои заказы</h1>
          </div>
          <div className='d-flex flex-wrap'>
            {isLoading && [...Array(8)].map((item, index) => <ContentLoader key={index} />)}
            {!isLoading &&
              orders.map((item, index) => (
                <Card key={index} displayItem={item} isLoading={isLoading} />
              ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Orders
