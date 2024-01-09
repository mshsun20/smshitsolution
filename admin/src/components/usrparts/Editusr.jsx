import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import server from '../../Server'

const Editusr = () => {
  const {uid} = useParams()
  const [usr, setUsr] = useState({usrunam:'', usrphn:'', usreml:'', usrfnam:'', usraddr:'', usrpin:''})
  let name, value
  const navig = useNavigate()

  const getUsr = async () => {
    const res = await axios.get(`${server}/client/edit/`+uid)
    const data = await res.data
    // console.log(data)
    setUsr(data.data)
  }
  useEffect(() => {
    getUsr()
  }, [])

  const hndlinp = (e) => {
    name = e.target.name
    value = e.target.value
    setUsr({...usr, [name]:value})
  }

  const hndlsub = async (e) => {
    e.preventDefault()
    const {usrunam, usrphn, usreml, usrfnam, usraddr, usrpin} = usr

    try {
      const res = await axios.put(`${server}/client/update/`+uid, {usrunam, usrphn, usreml, usrfnam, usraddr, usrpin})
      const data = await res.data

      if (data.statuscode === 220) {
        window.alert(data.success)
        navig('/user')
      }
      else {
        window.alert(data.error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
        <div className="wbpg">
          <Header/>

          <div className="main">
            <div className="home">Edit User Details</div>
            <div className="frm">
              <div className="frmgrp">
                  <label htmlFor="usrunam">Username</label>
                  <input type="text" name="usrunam" id="usrunam" value={usr.usrunam} onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usrphn">Phone Number</label>
                  <input type="text" name="usrphn" id="usrphn" value={usr.usrphn} onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usreml">Email Id</label>
                  <input type="text" name="usreml" id="usreml" value={usr.usreml} onChange={hndlinp} />
              </div>
              {/* <div className="frmgrp">
                  <label htmlFor="usrpass">Password</label>
                  <input type="password" name="usrpass" id="usrpass" value={usr.usrpass} onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="ucnfpass">Confirm Password</label>
                  <input type="password" name="ucnfpass" id="ucnfpass" onChange={hndlinp} />
              </div> */}
              <div className="frmgrp">
                  <label htmlFor="usrfnam">Full Name</label>
                  <input type="text" name="usrfnam" id="usrfnam" value={usr.usrfnam} onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usraddr">Address</label>
                  <input type="text" name="usraddr" id="usraddr" value={usr.usraddr} onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usrpin">Pin Code</label>
                  <input type="text" name="usrpin" id="usrpin" value={usr.usrpin} onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <input type="submit" value="Update Details" onClick={hndlsub} />
              </div>
            </div>
          </div>
          
          <Footer/>
        </div>
    </>
  )
}

export default Editusr