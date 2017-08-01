import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import MainNav from '../components/MainNav'
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
      <div>
        <MainNav />
        <div className='container' >
          <SearchBar />
          <HomeContent />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
