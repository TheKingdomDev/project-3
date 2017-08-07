import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import HomeNav from '../components/Recurrent/HomeNav'
import Footer from '../components/Recurrent/Footer'
import ProjectList from '../components/Projects/ProjectList'
import {CreateProject} from '../components/Projects/CreateProject'
// Project container to display the user projects
// Data required - UserProjects(Name, Desc, Primary Tech)
class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }
  }
  render () {
    console.log('This is project')
    return (
      <div>
        <HomeNav />
        {/* <ProjectList />
        <CreateProject /> */}
        <Footer />
      </div>
    )
  }
}

export default Project
