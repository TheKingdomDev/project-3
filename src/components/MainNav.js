import React from 'react'
import {Link} from 'react-router-dom'

const MainNav = () => (
  <nav className='navbar-fixed  z-depth-0'style={navStyle}>
    <div className='nav-wrapper'>
      <a href='#'className='brand-logo' style={{paddingLeft: 20}} >
        <Link to='/'>{'<ST />'}</Link></a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  </nav>
)

const navStyle = {
  fontFamily: 'Share Tech Mono',
  backgroundColor: '#172b4c'
}

export default MainNav
