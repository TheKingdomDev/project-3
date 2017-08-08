import React, {Component} from 'react'
import HomeNav from '../components/Recurrent/HomeNav'
import SlidingSideNav from '../components/UserHome/SlidingSideBar'
import Footer from '../components/Recurrent/Footer'
import { getMyInfo } from '../utils/apolloHelpers.js'

// Project details page to display the full description of a project as well as show tasks and comments
// Data needed will be the specific project that was clicked.
// Project Data will be (Title, Desc, Tech, Users)
// Other data includes task and comments

class ProjectDetails extends Component {
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
        <p>Find the project selected in the database and disply it here.</p>
        <Footer />
      </div>
    )
  }
}

export default ProjectDetails
