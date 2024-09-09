import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Charity from './components/Charity'
import { useSelector } from 'react-redux'
import Charities from './components/Charities'
import Details from './components/Details'

function App() {
  const state = useSelector(state => state.userReducer);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/charity' element={<Charity />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  )
}

export default App
