import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux/store'
import { fetchItems } from './redux/sneakers/slice'

import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import Silder from './components/Slider'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Silder />
              <Home />
            </>
          }
        />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App
