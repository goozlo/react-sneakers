import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.sass'
import 'macro-css'
import App from './App'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
