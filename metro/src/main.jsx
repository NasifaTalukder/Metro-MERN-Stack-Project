import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import './index.css'
import Shop from './components/Shop.jsx'
import RouterPage from './components/RouterPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterPage/>
  </React.StrictMode>,
)
