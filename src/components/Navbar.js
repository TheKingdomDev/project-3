import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className='navbar-fixed'>
    <div className='nav-wrapper'>
      <a href='#'className='brand-logo'>Project 3</a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/home'>Home</Link></li>
        <li>Sign Up</li>
      </ul>
    </div>
  </nav>
)

export default Navbar
