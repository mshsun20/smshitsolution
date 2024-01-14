import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Home from './components/Home'
import Account from './components/Account'
import Login from './components/Login'
import Users from './components/usrparts/Users'
import Addusr from './components/usrparts/Addusr'
import Upldusr from './components/usrparts/Upldusr'
import Editusr from './components/usrparts/Editusr'
import Services from './components/srvcparts/Services'
import Addsrvc from './components/srvcparts/Addsrvc'
import Upldsrvc from './components/srvcparts/Upldsrvc'
import Editsrvc from './components/srvcparts/Editsrvc'

const App = () => {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/account' element={<Account />} />
        <Route path='/home' element={<Home />} />
        <Route path='/user' element={<Users />} />
        <Route path='/addusr' element={<Addusr />} />
        <Route path='/upldusr' element={<Upldusr />} />
        <Route path='/editusr/:uid' element={<Editusr />} />
        <Route path='/service' element={<Services />} />
        <Route path='/addsrvc' element={<Addsrvc />} />
        <Route path='/upldsrvc' element={<Upldsrvc />} />
        <Route path='/editsrvc' element={<Editsrvc />} />
      </Routes>
    </div>
  )
}

export default App