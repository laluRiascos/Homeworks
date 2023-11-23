import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {MainApp} from './Challenge_11/MainApp.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <MainApp />
  </BrowserRouter>
)
