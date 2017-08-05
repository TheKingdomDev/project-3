import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import HomeNav from '../components/Recurrent//HomeNav'
import Footer from '../components/Recurrent/Footer'
import SearchBar from '../components/UserHome/SearchBar'
import HomeContent from '../components/UserHome/HomeContent'
import SlidingSideBar from '../components/UserHome/SlidingSideBar'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      users: []
    }
  }
  render () {
    return (
      <div>
        <HomeNav />
        <div className='container' >
          <SearchBar />
          <HomeContent />
          <SlidingSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
