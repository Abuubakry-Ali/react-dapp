import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1 className="navbar-brand" role="img">
        ZANstore
      </h1>
      <input
        className="searchbar"
        placeholder="  Search . . ."
        aria-label="Search"
        type="search"
      />
      <SearchIcon className='searchicon'/>
        <Link to='/login'><h4 className="login">My Account</h4></Link>
        <ShoppingCartIcon className='shopping-icon'/>

    </div>
  );
};

export default Header;
