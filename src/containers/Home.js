import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import HomeContent from '../components/HomeContent'

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
        <Navbar />
        <div className='container'>
        <SearchBar />
        <HomeContent />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
