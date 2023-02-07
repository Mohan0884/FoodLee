import React from 'react'
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
            </form>
        </div>
        
    </div>
  )
}

export default Login