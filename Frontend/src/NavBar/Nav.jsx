import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
<nav className=' bg-amber-100 text-black shadow-sm shadow-white flex gap-5 justify-center p-4'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Product</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
</nav>
  )
}

export default Nav