import { useState, useEffect } from 'react'
import axios from 'axios'
import server from '../Server'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [adm, setAdm] = useState()
    const [vl, setVl] = useState()
    let name, value
    const navig = useNavigate()
    axios.defaults.withCredentials = true

    const getAdmSess = async () => {
        try {
            const res = await axios.get(`${server}/admin/sess`)
            const data = await res.data

            if (data.statuscode === 200) {
                console.log(data.message)
                setAdm(data.admin)
                localStorage.setItem('admin', JSON.stringify(data.admin))
                navig('/home')
            }
            else {
                console.log(data.message)
            }
        } catch (error) {
            let collection = localStorage.getItem('admin')
            setAdm(JSON.parse(collection))
            console.error(error)
        }
    }
    useEffect(() => {
        getAdmSess()
    }, [])

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }

    const hndlsub = async (e) => {
        e.preventDefault()
        const {accunam, accpass} = vl

        try {
            if (!accunam || !accpass) {
                window.alert('Username and Password Must be Filled...!')
            }
            else {
                const res = await axios.post(`${server}/admin/login`, {accunam, accpass})
                const data = await res.data
                console.log(data)
                if (data.statuscode === 220) {
                    localStorage.setItem('admin', JSON.stringify(data.admin))
                    window.alert(data.success)
                    navig('/home')
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
                <div className="hdr">Admin Login</div>
                <div className="frm">
                    <div className="frmgrp">
                        <label htmlFor="accunam"></label>
                        <input type="text" name="accunam" id="accunam" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="accpass"></label>
                        <input type="password" name="accpass" id="accpass" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <input type="submit" value="Sign In" onClick={hndlsub} />
                    </div>
                </div>
            </div>                
        </div>
    </>
  )
}

export default Login