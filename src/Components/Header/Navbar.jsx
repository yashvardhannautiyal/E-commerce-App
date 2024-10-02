import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <ul className='navbar-list-items flex gap-9 items-center p-2 font-medium'>
            <li>
                <NavLink to ="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to ="/about">ABOUT</NavLink>
            </li>
            <li>
                <NavLink to ="/products">PRODUCTS</NavLink>
            </li>
            <li>
                <NavLink to ="/contact">CONTACT</NavLink>
            </li>
            <li>
                <NavLink to ="/cart"><FiShoppingCart /></NavLink>
            </li>
        </ul>
    </div>
        </>
  )
}

export default Navbar
