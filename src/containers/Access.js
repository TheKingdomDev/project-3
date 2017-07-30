import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
