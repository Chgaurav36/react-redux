import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'


const Navbar = () => {

  const item = useSelector((state)=>state.cart);
  return (
    <nav>
      <div className="logo">
        <Link className='link' to="">
        <span id='logo'>Shoppers Hub</span></Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link className='link' to="/">Home</Link>
        </li>
        <li>
          <Link className='link' to="/cart">Cart</Link>
        </li>
      </ul>
      <span className='cart-count'>Cart Items: {item.length}</span>
    </nav>
  )
}

export default Navbar
