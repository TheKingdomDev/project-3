import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className='navbar-fixed  z-depth-0' style={navStyle}>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>{'<ST />'}</Link>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/login' style={{paddingRight: 10}}>Log In</Link></li>
        <li><Link to='/profile' style={{paddingRight: 10}}>Profile</Link></li>
      </ul>
    </div>
  </nav>
)

const navStyle = {
  fontFamily: 'Share Tech Mono',
  backgroundColor: '#172b4c'
}


// lightgray #d1d8d0

export default Navbar



