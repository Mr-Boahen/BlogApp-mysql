import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='container'>
          <div className='logo'>MY BLOG</div>
          <div className="links">
            <Link className='link'><h6>ART</h6> </Link>
            <Link className='link'><h6>SCIENCE</h6> </Link>
            <Link className='link'><h6>TECHNOLOGY</h6> </Link>
            <Link className='link'><h6>CINEMA</h6> </Link>
            <Link className='link'><h6>DESIGN</h6> </Link>
            <Link className='link'><h6>FOOD</h6> </Link>
           
            <span>John</span>
            <span>Logout</span>
            <span className='write'> <Link to='/write' className='link'>Write</Link></span>
          </div>
        </div>

    </div>
  )
}

export default NavBar