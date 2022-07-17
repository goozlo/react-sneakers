import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AppContext from './components/context'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const url = 'https://62d15e83dccad0cf176623b6.mockapi.io'

  useEffect(() => {
    // setIsLoading(true)
    async function fetchdata() {
      await axios.get(`${url}/cart`).then(res => setCartItems(res.data))
      await axios.get(`${url}/favorites`).then(res => setFavorites(res.data))
      await axios.get(`${url}/items`).then(res => setItems(res.data))
      setIsLoading(false)
    }
    fetchdata()
  }, [])

  //Удаление из корзины и избранного
  //Добавление в корзину и избранное

  function onChangeHandler(arr, endpoint, callback, obj) {
    const deletedItem = arr.find(item => item.itemId === obj.itemId)
    if (deletedItem !== undefined) {
      axios.delete(`${url}/${endpoint}/${deletedItem.id}`)
      callback(prev => prev.filter(item => item.itemId !== deletedItem.itemId))
    }
    if (deletedItem === undefined) {
      // callback(prev => [...prev, obj])
      axios
        .post(`${url}/${endpoint}`, obj)
        .then(() => axios.get(`${url}/${endpoint}`))
        .then(res => callback(res.data))
    }
  }

  const onChangeCart = obj => {
    try {
      onChangeHandler(cartItems, 'cart', setCartItems, obj)
    } catch (error) {
      alert('Не удалось добавить в корзину')
    }
  }

  const onChangeFavorite = async obj => {
    try {
      onChangeHandler(favorites, 'favorites', setFavorites, obj)
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  //------------------------------------------------------------

  return (
    <AppContext.Provider value={{ items, cartItems, favorites }}>
      <div className='wrapper clear'>
        {cartOpened && (
          <Drawer
            items={cartItems}
            onCloseCart={() => setCartOpened(!cartOpened)}
            onChangeCart={onChangeCart}
          />
        )}
        <Header onClickCart={() => setCartOpened(!cartOpened)} />

        <Routes>
          <Route
            path='/'
            element={
              <Home
                items={items}
                onChangeCart={onChangeCart}
                onChangeFavorite={onChangeFavorite}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites
                favoriteItems={favorites}
                onChangeCart={onChangeCart}
                onChangeFavorite={onChangeFavorite}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
