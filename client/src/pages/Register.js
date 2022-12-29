import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
// import '../style.scss'

function Register() {
  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
  }) 
  const handleChange=(e)=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
      
  }
  const handleSubmit= async(e) =>{
    e.preventDefault();
    try{
      const res=await axios.post("/auth/register",inputs)
    }catch(err){
      console.log(err);
    }
    
    
  }
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            <input type="email" placeholder='Email'  name='email' onChange={handleChange} /> 
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />

            <p>This is an error</p>
            <button onClick={handleSubmit}>Register</button>
            <span>Do you have an account? <Link className='link' to='/login'>Login</Link></span>
        </form>

    </div>
  )
}

export default Register