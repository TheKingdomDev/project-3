import React, { Component } from 'react'
import HomeNav from '../../components/material-ui/UserHome/HomeNav'
import SideNav from '../../components/material-ui/Recurrent/SideNav'
import Footer from '../../components/material-ui/Recurrent/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Profile extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <HomeNav />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Profile
