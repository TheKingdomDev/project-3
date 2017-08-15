import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

const navTitleStyle = {
  textAlign: 'center'
}

const LandingNavigation = (props) => (
  <AppBar
    showMenuIconButton={false}
    titleStyle={navTitleStyle}
    title={
      <Link to='/'>
       stackTeam
      </Link>}
  />
)

export default LandingNavigation
