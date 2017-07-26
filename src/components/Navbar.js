import React from 'react'

const Navbar = () => (
  <nav className='navbar-fixed'>
    <div className='nav-wrapper'>
      <a href='#'className='brand-logo'>Project 3</a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </div>
  </nav>
)

export default Navbar
