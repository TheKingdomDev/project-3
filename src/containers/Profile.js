import React, { Component } from 'react'
import Navbar from '../components/Recurrent/Navbar'
import Footer from '../components/Recurrent/Footer'

import {
  AvatarCard,
  Skills,
  Accounts,
  Bio,
  Projects,
  Tasks
 } from '../components/Profile/index'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
        // we will set the necessary user info here
        // and pass it DOWN as props to the respective
        // child components
    }
  }
  render () {
    return (
      <div>
        <Navbar/>
        <div className='container' style={{marginTop: '20px'}}>
          <div className='row'>
            <div className='col s4' style={{border:'1px solid blue'}}>
              <AvatarCard />   
            </div>
            <div className='col s8' style={{border:'1px solid red', height: '515.5px'}}>
              <div className='container'>
                <Skills /> 
                <Accounts />   
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12' style={{border:'1px solid purple', minHeight: '125px'}}>
              <Bio />  
            </div>
            <div className='col s12' style={{border:'1px solid green', minHeight: '125px'}}>
              <Projects />   
            </div>
            <div className='col s12' style={{border:'1px solid orange', minHeight: '125px'}}>
              <Tasks />   
            </div>
          </div>
        </div> {/* end main container */}
        <Footer />
      </div>   
    )
  }
}

export default Profile
