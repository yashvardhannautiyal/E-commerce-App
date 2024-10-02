import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "./Navbar";

function Header() {
  return (
    <div className='flex justify-between p-3'>
        
    <NavLink to ="/">
    <h1 className='logo font-bold font-logoFont text-3xl text-yellow-600 '>BazzarMate</h1>
    </NavLink>
    
    <Navbar/>
    </div>
  
    
  )
}

export default Header
