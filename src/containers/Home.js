import React, { Component } from 'react'
import HomeNav from '../components/Recurrent//HomeNav'
import Footer from '../components/Recurrent/Footer'
import SearchBar from '../components/UserHome/SearchBar'
import HomeContent from '../components/UserHome/HomeContent'
import SlidingSideBar from '../components/UserHome/SlidingSideBar'
import { getMyInfo } from '../utils/apolloHelpers'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      users: [],
      user: {}
    }
  }
  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
    console.log(this.state.user)
  }
  render () {
    return (
      <div>
        <HomeNav user={this.state.user} />
        <SlidingSideBar user={this.state.user} />
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
