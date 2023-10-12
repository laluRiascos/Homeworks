import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {TodoApp} from './Challenge_09/TodoApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>,
)
