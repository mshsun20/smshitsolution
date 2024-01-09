import { useState } from 'react'
import axios from 'axios'
import server from '../Server'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    // const [usr, setUsr] = useState()
    const [vl, setVl] = useState()
    let name, value
    const navig = useNavigate()
    // axios.defaults.withCredentials = true

    // const getUsrSess = async () => {
    //     try {
    //         const res = await axios.get(`${server}/client/sess`)
    //         const data = await res.data

    //         if (data.statuscode === 200) {
    //             console.log(data.message)
    //             localStorage.setItem('user', data.user)
    //             navig('/')
    //         }
    //         else {
    //             console.log(data.message)
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    
    // useEffect(() => {
    //     getUsrSess()
    // }, [])

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }

    const hndlsub = async (e) => {
        e.preventDefault()
        const {usrunam, usrpass} = vl

        try {
            if (!usrunam || !usrpass) {
                window.alert('Username and Password Must be Filled...!')
            }
            else {
                const res = await axios.post(`${server}/client/login`, {usrunam, usrpass})
                const data = await res.data
                console.log(data)
                if (data.statuscode === 220) {
                    localStorage.setItem('user', JSON.stringify(data.user))
                    window.alert(data.success)
                    navig('/')
                }
                else {
                    window.alert(data.error)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div className="wbpg">
            <div className="main">
                <div className="hdr">User Login</div>
                <div className="frm">
                    <div className="frmgrp">
                        <label htmlFor="usrunam">Username</label>
                        <input type="text" name="usrunam" id="usrunam" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="usrpass">Password</label>
                        <input type="password" name="usrpass" id="usrpass" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <input type="submit" value="Sign In" onClick={hndlsub} />
                    </div>
                </div>
                <div className="lnk">
                    <span>Not yet Regitered, Click here :-&nbsp;</span>
                    <NavLink to='/register'>Registration</NavLink>
                </div>
            </div>                
        </div>
    </>
  )
}

export default Login