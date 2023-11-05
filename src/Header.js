import React from 'react';
import img from '../src/amazon-icon.jpg';
import img1 from '../src/amazon-dark.png';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <nav className='header'>
    <Link to ="/">
      {/* {/* logo on left->img  */}
      <img className='header_logo'
       src={img1}
        alt="amazon_logo" />
    </Link>
      {/* search box */}
      <div className="header_search">
      <input type="text" className="header_searchInput" />
      <SearchIcon className="header_searchIcon"/>
      </div>
      {/* three links  */}
      <div className="header_nav">
        {/* 1st Link */}
       <Link to ="/login" className="header_link">
       <div className="header_option">
       <span>hello Gungun</span>
       <span>Sign in</span>
       </div>
       </Link>
        {/* 2ND Link */}
        <Link to ="/" className="header_link">
       <div className="header_option">
       <span>Returns</span>
       <span>& Orders</span>
       </div>
       </Link>

        {/* 3rd Link */}
        <Link to ="/" className="header_link">
       <div className="header_option">
       <span>Your</span>
       <span>Prime</span>
       </div>
       </Link>
      {/* basket icon with number of items added */}
     
      </div>
    </nav>
  )
}

export default Header;
