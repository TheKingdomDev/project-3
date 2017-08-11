import React, { Component } from 'react'
import HomeNav from '../components/Recurrent//HomeNav'
import Footer from '../components/Recurrent/Footer'
import SearchBar from '../components/UserHome/SearchBar'
import HomeContent from '../components/UserHome/HomeContent'
import SlidingSideBar from '../components/UserHome/SlidingSideBar'
import { getMyInfo, searchbyName } from '../utils/apolloHelpers'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      users: [],
      user: {}
    }
    this.getSearchResults = this.getSearchResults.bind(this)
  }

  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })

    // this.getSearchResults('test')
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  getSearchResults (e) {
    searchbyName(e.target.value)
    .then(res => {
      this.setState({
        users: res.data.users,
        projects: res.data.projects
      })
    })
  }

  render () {
    return (
      <div>
        <HomeNav user={this.state.user} />
        <SlidingSideBar user={this.state.user} />
        <div className='container' >
          <SearchBar getSearchResults={this.getSearchResults} />
          <HomeContent users={this.state.users} projects={this.state.projects} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
