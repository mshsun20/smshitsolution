import { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import server from '../../Server'
import { useNavigate } from 'react-router-dom'

const Addusr = () => {
  const [vl, setVl] = useState()
  let name, value
  const navig = useNavigate()

  const hndlinp = (e) => {
      name = e.target.name
      value = e.target.value
      setVl({...vl, [name]:value})
  }

  const hndlsub = async (e) => {
    e.preventDefault()
    const {usrunam, usrphn, usreml, usrpass, ucnfpass, usrfnam, usraddr, usrpin} = vl

    try {
      if (!usrunam || !usrphn || !usreml || !usrpass || !ucnfpass || !usrfnam) {
        window.alert('All Mandatory Fields Must be Filled...!')
      }
      else {
        if (usrpass === ucnfpass) {
          const res = await axios.post(`${server}/client/register`, {usrunam, usrphn, usreml, usrpass, usrfnam, usraddr, usrpin})
          const data = await res.data
          // console.log(data)
          if (data.statuscode === 220) {
            window.alert(data.success)
            navig('/user')
          }
          else {
            window.alert(data.error)
          }
        }
        else {
          window.alert('Confirm Password Must be Same...!')
        }
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
            <div className="hdr">Addusr page</div>
            <div className="frm">
              <div className="frmgrp">
                  <label htmlFor="usrunam">Username</label>
                  <input type="text" name="usrunam" id="usrunam" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usrphn">Phone Number</label>
                  <input type="text" name="usrphn" id="usrphn" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usreml">Email Id</label>
                  <input type="text" name="usreml" id="usreml" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usrpass">Password</label>
                  <input type="password" name="usrpass" id="usrpass" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="ucnfpass">Confirm Password</label>
                  <input type="password" name="ucnfpass" id="ucnfpass" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usrfnam">Full Name</label>
                  <input type="text" name="usrfnam" id="usrfnam" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usraddr">Address</label>
                  <input type="text" name="usraddr" id="usraddr" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <label htmlFor="usrpin">Pin Code</label>
                  <input type="text" name="usrpin" id="usrpin" onChange={hndlinp} />
              </div>
              <div className="frmgrp">
                  <input type="submit" value="Sign Up" onClick={hndlsub} />
              </div>
            </div>
          </div>
          
          <Footer/>
        </div>
    </>
  )
}

export default Addusr