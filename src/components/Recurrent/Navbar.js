import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className='navbar-fixed  z-depth-0' style={styles.navStyles}>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo' style={{paddingLeft: 15}}>{'<ST />'}</Link>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/login' style={{paddingRight: 15}}>Log In</Link></li>
        <li><Link to='/profile' style={{paddingRight: 15}}>Profile</Link></li>
      </ul>
    </div>
  </nav>
)

const styles = {
  navStyles: {
    fontFamily: 'Share Tech Mono',
    backgroundColor: '#172b4c'
  }
}

export default Navbar
