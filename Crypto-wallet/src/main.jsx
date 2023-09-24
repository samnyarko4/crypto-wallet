import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Market from './views/Market.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
      path:'/',
      element: <App />
  },
  {
      path:'/market',
      element: <Market />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
