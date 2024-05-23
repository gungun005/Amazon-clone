import React from 'react';
import img from '../src/amazon-icon.jpg';
import img1 from '../src/amazon-dark.png';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { ChangeEvent, useState } from "react";
import { Button } from '@mui/material';

function Header() {
    const [{ basket,user}] = useStateValue();
    const [searchBarText, setSearchBarText] = useState("");
    //console.log(basket);
  return (
    <nav className='header'>
    <Link to ="/">
      {/* {/* logo on left->img  */}
      <img className='header_logo'
       src={img1}
        alt="amazon_logo" />
    </Link>
      {/* search box */}
      <div className="header_search" id="search_entry">
        <input type="text" className="header_searchInput"  id={'my-input'} placeholder={'Type here'} onChange={event => {setSearchBarText(event.target.value)}} />
        <button onClick={console.log(searchBarText)}>
          <SearchIcon className="header_searchIcon"/>
        </button>
      {/* console.log({state}); */}
      </div>
      {/* three links  */}
      <div className="header_nav">
        {/* 1st Link */}
       <Link to ="/login" className="header_link">
       <div className="header_option">
       <span className="header_optionLineOne">hello Gungun</span>
       <span  className="header_optionLineTwo">Sign in</span>
       </div>
       </Link>
        {/* 2ND Link */}
        <Link to ="/" className="header_link">
       <div className="header_option">
       <span className="header_optionLineOne">Returns</span>
       <span  className="header_optionLineTwo">& Orders</span>
       </div>
       </Link>

        {/* 3rd Link */}
        <Link to ="/" className="header_link">
       <div className="header_option">
       <span className="header_optionLineOne">Your</span>
       <span className="header_optionLineTwo">Prime</span>
       </div>
       </Link>
      {/* basket icon with number of items added */}
      <Link to ="/checkout" className="header_link">
      <div className="header_optionbasket">
        {/* shopping basket icon */}
        <ShoppingBasketIcon/>
        {/* no of items in the basket */}
        <span className='header_optionLineTwo  header_basketCount'>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </nav>
  
  )
}

export default Header;
