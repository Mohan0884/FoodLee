import React,{useState} from 'react'
import Foodlee from './Foodlee.png'
function Register() {
  const [register,setRegister]=useState({
    cname:"",
    cemail:"",
    cpassword:"",
    creenter:""

  });
  function submitregister(e){
    e.preventDefault();
  }
  return (
    <div className='login-full'>
        <div classname='login-in'> 
            <form className='login'>
                <img className='foodlee-login'  src={Foodlee} alt=""/>
                <input type="text" name='cname' placeholder='Enter Your Name' className='login-input' />
                <input className='login-input' name='cemail' placeholder=' Enter your email' type="email"  />
                <input className='login-input' name='cpassword' placeholder='Enter password' type="password"/>
                <input className='login-input' name='creenter' placeholder='Re-Enter password' type='password' />
                <input className='login-submit' onClick={submitregister} type="submit" value="Register" />
            </form>
        </div>
        
    </div>
  )
}

export default Register