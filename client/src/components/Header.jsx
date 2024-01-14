import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Header