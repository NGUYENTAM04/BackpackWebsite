import React from 'react'
import './Navbar.css'
// import navlogo from '../../Assets/nav-logo.svg'
import navlogo from '../../Components/Assets/nav-logo.svg'
// import navProfile from '../../Assets/nav-profile.svg'
import navProfile from '../../Components/Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
