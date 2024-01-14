import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navmenu">
        <div className="menulist">
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className="menulist">
          <NavLink to='/register'>Registration</NavLink>
        </div>
        <div className="menulist">
          <NavLink to='/login'>Login</NavLink>
        </div>
        <div className="menulist">
          <NavLink to='/service'>Services</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar