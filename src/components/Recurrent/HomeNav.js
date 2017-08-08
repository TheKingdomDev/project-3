import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = (props) => (
  <nav className='navbar-fixed  z-depth-0'style={navStyle}>
    <div className='nav-wrapper'>
      <section key='logo_and_sideNav'>
        <Link to='/home' className='brand-logo center' style={{paddingLeft: 20}}>
          {'<ST />'}
        </Link>
      </section>
      <ul id='nav-mobile' className='right hide-on-med-and-down' />
    </div>
  </nav>
)

const navStyle = {
  fontFamily: 'Share Tech Mono',
  backgroundColor: '#172b4c'
}

export default MainNav
