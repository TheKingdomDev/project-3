import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

const navTitleStyle = {
  textAlign: 'center',
  fontFamily: 'Share Tech Mono',
  fontSize: 35,
  textDecoration: 'none'
}

const LandingNavigation = (props) => (
  <AppBar
    showMenuIconButton={false}
    titleStyle={navTitleStyle}
    title={
      <Link to='/'>
        {'<ST />'}
      </Link>}
  />
)

export default LandingNavigation
