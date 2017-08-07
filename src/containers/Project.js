import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import HomeNav from '../components/Recurrent/HomeNav'
import Footer from '../components/Recurrent/Footer'
import ProjectList from '../components/Projects/ProjectList'
import CreateProject from '../components/Projects/CreateProject'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {getProjectInfo} from '../utils/apolloHelpers'

// Project container to display the user projects
// Data required - UserProjects(Name, Desc, Primary Tech)
class Project extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
    this.renderProjects = this.renderProjects.bind(this)
  }
  componentDidMount () {
    getProjectInfo().then(res => {
      this.state = res
    })
  }
  renderProjects (data) {
    return this.state.projects.map(proj => (
      <Collapsible popout>
        <CollapsibleItem key={proj._id}header={proj.name} icon='folder'>{proj.description}</CollapsibleItem>
      </Collapsible>
    )
    )
  }
  render () {
    return (
      <div>
        <HomeNav />
        <ProjectList />
        <div className='container'>
          {this.renderProjects()}
        </div>
        <CreateProject />
        <Footer />
      </div>
    )
  }
}

export default Project
