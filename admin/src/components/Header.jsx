import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from './Logo'
import axios from 'axios'
import server from '../Server'

const Header = () => {
  const [adm, setAdm] = useState()
  const navig = useNavigate()

  axios.defaults.withCredentials = true

  const getAdmSess = async () => {
    try {
      const res = await axios.get(`${server}/admin/sess`)
      const data = await res.data
      // console.log(data)

      if (data.statuscode === 200) {
        console.log(data.message)
        setAdm(data.admin)
        localStorage.setItem('admin', JSON.stringify(data.admin))
      }
      else {
        console.log(data.message)
        navig('/')
      }
    } catch (error) {
      let collection = localStorage.getItem('admin')
      setAdm(JSON.parse(collection))
      console.error(error)
      navig('/')
    }
  }

  useEffect(() => {
    getAdmSess()
  }, [])

  return (
    <>
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="navbar">
          <Navbar acc={adm} />
        </div>
      </div>
    </>
  )
}

export default Header