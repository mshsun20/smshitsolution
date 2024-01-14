import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Users.css'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import server from '../../Server'

const Users = () => {
  const [usr, setUsr] = useState()
  const [uid, setUid] = useState()

  const getUsr = async () => {
    try {
      const res = await axios.get(`${server}/client/fetch`)
      const data = await res.data
      // console.log(data)
      if (data.statuscode === 220) {
        setUsr(data.data)
      }
      else {
        console.error(`User data couldn't be fetched...!`)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUsr()
  }, [])

  const rmvcnfrm = (id) => {
    setUid(id)
    document.querySelector('.cnf').style.display = 'flex'
  }
  const rmvcls = () => {
    document.querySelector('.cnf').style.display = 'None'
  }
  const rmvUsr = async () => {
    try {
      const res = await axios.delete(`${server}/client/remove/`+uid)
      const data = await res.data
      // console.log(data)
      if (data.statuscode === 220) {
        window.alert(data.message)
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
        <div className="wbpg">
          <Header/>

          <div className='cnf'>
            <span>Confirm to remove User ?</span>
            <div className="btngrp">
              <button id='okbtn' onClick={rmvUsr}>Ok</button>
              <button id='cnclbtn' onClick={rmvcls}>Cancel</button>
            </div>
          </div>
          
          <div className="main">
            <div className="home">
              <div className="hdr">Users page</div>
              <div className="tbldta">
                <table className='tbl'>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Phone No</th>
                      <th>Email Id</th>
                      <th>Full Name</th>
                      <th>Address</th>
                      <th>Pin Code</th>
                      <th>Created On</th>
                      <th>Modified On</th>
                      <th>Edit</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (usr) ? usr.map((elm, i) => ((
                        <tr key={i}>
                          <td>{elm.usrunam}</td>
                          <td>{elm.usrphn}</td>
                          <td>{elm.usreml}</td>
                          <td>{elm.usrfnam}</td>
                          <td>{elm.usraddr}</td>
                          <td>{elm.usrpin}</td>
                          <td>{new Date(elm.createdAt).toLocaleString()}</td>
                          <td>{new Date(elm.updatedAt).toLocaleString()}</td>
                          <td><NavLink to={`/editusr/${elm._id}`}>_</NavLink></td>
                          <td><button onClick={(e) => rmvcnfrm(elm._id)}>x</button></td>
                        </tr>
                      ))) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lnk">
              <NavLink to='/addusr'>Add Users</NavLink>
            </div>
          </div>
          
          <Footer/>
        </div>
    </>
  )
}

export default Users