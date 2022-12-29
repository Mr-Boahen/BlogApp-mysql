import React from 'react'
import { Link } from 'react-router-dom'
// import '../style.scss'

function Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <p>This is an error</p>
            <button>Login</button>
            <span>Don't you have an account? <Link className='link' to='/register'>Register</Link></span>
        </form>

    </div>
  )
}

export default Login