import React from 'react'
import img from '../src/amazon-icon.jpg'
import img1 from '../src/amazon-dark.png'
import './Header.css'

function Header() {
  return (
    <nav className='header'>
      {/* {/* logo on left->img  */}
      <img className='header_logo' src={img1} alt="amazon_logo" />
      {/* search box */}
      {/* three links  */}
      {/* basket icon with number of items added */}
    </nav>
  )
}

export default Header;
