import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import server from '../Server'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // const [clnt, setClnt] = useState()
  // const navig = useNavigate()

  // axios.defaults.withCredentials = true

  // const getClntSess = async () => {
  //   try {
  //     const res = await axios.get(`${server}/client/sess`)
  //     const data = await res.data
  //     // console.log(data)
  //     setClnt(data.user)

  //     if (data.statuscode === 200) {
  //       console.log(data.message)
  //       localStorage.setItem('user', JSON.stringify(data.user))
  //     }
  //     else {
  //       console.log(data.message)
  //       navig('/login')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     navig('/login')
  //   }
  // }

  // useEffect(() => {
  //   getClntSess()
  // }, [])

  return (
    <>
      <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="home">Home page</div>
        </div>
        
        <Footer/>
      </div>
    </>
  )
}

export default Home