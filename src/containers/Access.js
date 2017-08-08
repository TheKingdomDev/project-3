import React, { Component } from 'react'
import Navbar from '../components/Recurrent/Navbar'
import Footer from '../components/Recurrent/Footer'
import Login from '../components/Login'

// This is the Login page. Named "Access" to avoid
// possible conflicts. We already have a Login component
class Access extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Login />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Access
