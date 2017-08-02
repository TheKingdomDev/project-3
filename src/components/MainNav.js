import React from 'react'
import {Link} from 'react-router-dom'

const MainNav = () => (
  <nav className='navbar-fixed  z-depth-0 indigo'>
    <div className='nav-wrapper'>
      <a href='#'className='brand-logo' style={{paddingLeft: 20}} >
        <Link to='/' style={codeFont}>{'<ST />'}</Link></a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  </nav>
)

const codeFont = {
  fontFamily: 'Courier'
}

export default MainNav