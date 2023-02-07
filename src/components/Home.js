import React from 'react'
import {NavLink} from 'react-router-dom';
import Tiffin from '../images/tiffin.jpg'
import Lunch from '../images/lunch.jpeg';
import Shakes from '../images/shakes.jpg';
function Home() {
  return (
    <div className="home-full">
      <div className='welcome'>
      <div className="quote">
             Enjoy Every Day with Greatest Food!

      </div>
      <NavLink  className='nav-link'to='/login'>Get Started</NavLink>
      

      </div>
      <p className='explore'>Explore</p>

      <div className="welcome2">
        <div className="card">
          
          <img className='card-image' src={Tiffin} alt="" />
      <NavLink  className='nav-link'to='/tiffin'>Tiffin</NavLink>

          
        </div>
        <div className="card">
        <img className='card-image' src={Lunch} alt="" />
        <NavLink  className='nav-link'to='/lunch'>Lunch</NavLink>

        </div>
        <div className="card">
        
        <img className='card-image' src={Shakes} alt="" />
        <NavLink  className='nav-link'to='/milkshakes'>MilkShakes</NavLink>

        </div>
      </div>
      <div className='copy-right'>
            no &copy; copyrights

      </div>
      
    </div>
    
    
  )
}

export default Home