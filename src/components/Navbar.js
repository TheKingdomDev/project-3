import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className='navbar-fixed  z-depth-0 indigo'>
    <div className='nav-wrapper'>
      <a href='#'className='brand-logo' style={{paddingLeft: 20}} >Blah Blah!</a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/login'>Log In</Link></li>
        <li><Link to='/registration'>Register</Link></li>
      </ul>
    </div>
  </nav>
)

export default Navbar
