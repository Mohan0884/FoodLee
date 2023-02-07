import React,{useRef} from 'react'
import {NavLink} from 'react-router-dom';
import Foodlee from '../components/Foodlee.png';
function Navbar({cartItems}) {
  const navRef=useRef();
 const countCartItems=cartItems.length;
 

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
  
    return (
      
      <header>
         <NavLink to='/' > <img className='navbar-logo' src={Foodlee} alt='foodlee-logo' />  </NavLink>
        <nav ref={navRef}>
        <NavLink className='nav-links' to='/login'>Login</NavLink>
        <NavLink className='nav-links' to='/register'>Register</NavLink>
        <NavLink  className='nav-links'to='/shop'>shop</NavLink>
        
        <NavLink  className='nav-links'to='/Cart'><i className='fas fa-shopping-cart'>{countCartItems? (countCartItems.toString()):' '}</i></NavLink>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            close
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          open
        </button>
      </header>
    );
  }
  


export default Navbar