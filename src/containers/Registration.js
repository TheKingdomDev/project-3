import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

class Registration extends Component {
  render () {
    return (
      <div className='container'>
        <Navbar />
        <Login />
        <SignUp />
        <Footer />
      </div>
    )
  }
}

export default Registration
