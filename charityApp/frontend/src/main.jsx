import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import  { storage } from "./storage/storage.js"
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={storage}>
    <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
  </Provider>
)
