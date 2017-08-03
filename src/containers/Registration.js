import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Navbar from '../components/Recurrent/Navbar'
import Footer from '../components/Recurrent/Footer'
import SignUp from '../components/SignUp'
import Login from '../components/Login/Login'

class Registration extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          {/* <div className='col s8 offset-s2'> */}
            <SignUp />
          {/* </div> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Registration
