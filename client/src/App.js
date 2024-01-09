import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <div>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App