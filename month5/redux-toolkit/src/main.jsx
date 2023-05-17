import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import appStore2 from './toolkit'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
