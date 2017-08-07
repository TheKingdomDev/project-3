import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import HomeNav from '../components/Recurrent/HomeNav'
import Footer from '../components/Recurrent/Footer'
import ProjectList from '../components/Projects/ProjectList'
import CreateProject from '../components/Projects/CreateProject'
import {Collapsible, CollapsibleItem} from 'react-materialize'

// Project container to display the user projects
// Data required - UserProjects(Name, Desc, Primary Tech)
class Project extends Component {
  constructor () {
    super()
    this.state = {
      projects: [
        {name: 'test1', description: 'longtestone'},
        {name: 'test2', description: 'longtesttwo'}
      ]
    }
    this.renderProjects = this.renderProjects.bind(this)
  }
  renderProjects (data) {
    return this.state.projects.map(proj => (
      <Collapsible popout>
        <CollapsibleItem header={proj.name} icon='folder'>{proj.description}</CollapsibleItem>
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
