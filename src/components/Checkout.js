import React from 'react'
import { NavLink } from 'react-router-dom'
function Checkout() {
  return (
    <div className="checkout">

        <h1 className="nav-link">Checkout Successful</h1>
        <NavLink className="nav-link" to='/shop'>Go to Shop</NavLink>
    </div>
  )
}

export default Checkout