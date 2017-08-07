import React, {Component} from 'react'
import HomeNav from '../components/Recurrent/HomeNav'
import SlidingSideNav from '../components/UserHome/SlidingSideBar'
import Footer from '../components/Recurrent/Footer'
import ProjectList from '../components/Projects/ProjectList'
import CreateProject from '../components/Projects/CreateProject'

import { getMyInfo } from '../utils/apolloHelpers.js'

// Project container to display the user projects
// Data required - UserProjects(Name, Desc, Primary Tech)
class Project extends Component {
  constructor () {
    super()
    this.state = {
      user: {},
      projects: []
    }
  }
  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
  }
  render () {
    return (
      <div>
        <HomeNav />
        <SlidingSideNav user={this.state.user} />
        <ProjectList />
        <CreateProject />
        <Footer />
      </div>
    )
  }
}

export default Project
