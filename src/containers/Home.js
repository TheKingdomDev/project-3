import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import HomeContent from '../components/HomeContent'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      projects: [],
      users: []
    }
  }
  render () {
    return (
      <div className='container'>
        <Navbar />
        <SearchBar />
        <HomeContent />
        <Footer />
      </div>
    )
  }
}

export default Home
