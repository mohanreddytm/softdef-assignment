import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";



import logo from '../../assets/applogo.png'

import './index.css'

const Header = () => {
  return (
    <div className="header">
      <div className='header-main-logo-cont'>
        <img src={logo} alt="app logo"/>
        <h1>FloraVision.</h1>
      </div>
      <div className="header-menu-items">
        <p>Home</p>
        <select>
          <option value="Plant Type">Plant Type</option>
        </select>
        <p>More</p>
        <p>Content</p>
      </div>
      <div className="header-icons-cont">
        <CiSearch className="search-icon" />
        <IoBagHandleOutline className="bag-icon" />
        <HiOutlineMenuAlt3 className="menu-icon" />
      </div>
    </div>
  )
}

export default Header
