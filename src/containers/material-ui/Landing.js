import React, { Component } from 'react'
import LandingNavigation from '../../components/Recurrent/LandingNavigation'
import Jumbotron from '../../components/material-ui/Landing/Jumbotron'

// This container represents the landing page
export default class Landing extends Component {
  render () {
    return (
      <div id='main'>
        <div id='navbar'>
          <LandingNavigation />
        </div>

        <div id='jumbo-header'>
          <Jumbotron />
        </div>
      </div>
    )
  }
}
