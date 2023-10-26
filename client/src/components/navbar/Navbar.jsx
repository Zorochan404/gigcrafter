import React from 'react'
import "./navbar.scss"
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <div className='navbar'data-scroll-section >
        <img className='logo' src={logo}></img>
        <div className="nav-part2">
        <h4>Home</h4>
        <h4>Kitchen</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
        </div>
        <div className="nav-part3">
            <div className="circle">

            </div>
        </div>
    </div>
  )
}
