import React from 'react'
import { NavLink } from 'react-router-dom'
import Foodlee from './Foodlee.png'
function Login() {
  return (
    <div className='login-full'>
        <div classname='login-in'> 
            <form action="" className='login'>
                <img className='foodlee-login' src={Foodlee} alt=""/>
                <input className='login-input' placeholder=' Enter your email' type="text" name='login' />
                <input className='login-input' placeholder='Enter password' type="password" name='password'/>
                
                
                <input className='login-submit' type="submit" value="Submit" />
                <p>Don't have an account?</p><NavLink to='/register'>Register Now</NavLink>
            </form>
        </div>
        
    </div>
  )
}

export default Login