import React, { Component } from 'react'
import HomeNav from '../../components/material-ui/UserHome/HomeNav'
import SideNav from '../../components/material-ui/Recurrent/SideNav'
import Footer from '../../components/material-ui/Recurrent/Footer'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import HomeTest from '../../components/material-ui/UserHome/HomeTest'

class Profile extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <HomeNav />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Profile
