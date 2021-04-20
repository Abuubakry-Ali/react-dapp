import React from "react"

import {
NavLink
} from 'react-router-dom';
import './Nav.css'

const Nav = () => {

  return ( <
    nav >
    <
    ul className = 'nav-list' >
    <
    NavLink exact  activeClassName="active" to = "/" >
    <
    li className = 'nav-itemf nav-link' >  Shop</li> < /NavLink>
    < NavLink  activeClassName = " active " to="/BestSellers"
     >
     <
    li className = 'nav-items nav-link' >  Best Sellers </li>< /NavLink>
    < NavLink activeClassName="active nav-link" to = "/Sale" >
     <
    li className = 'nav-items' >  Sale </li>< /NavLink>

     <NavLink activeClassName="active nav-link" to = "/LatestArrivals" > <li className = 'nav-items' >Latest Arrivals </li>< /NavLink>
< NavLink activeClassName="active nav-link" to = "/CustomerService" >   <
    li className = 'nav-items' >  Customer Service </li>< /NavLink>

   < NavLink activeClassName="active nav-link" to = "/AboutUs" ><li className = 'nav-iteml' >  About us</li> < /NavLink>
     <
    /ul> <
    /nav>
  )

}

export default Nav;
