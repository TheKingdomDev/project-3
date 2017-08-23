import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../components/Recurrent/HomeNav'
import Footer from '../components/Recurrent/Footer'
import ProjectList from '../components/Projects/ProjectList'
import CreateProject from '../components/Projects/CreateProject'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import { getMyInfo, getProjectInfo } from '../utils/apolloHelpers.js'

// Project container to display the user projects
// Data required - UserProjects(Name, Desc, Primary Tech)
class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      user: {}
    }
    this.renderProjects = this.renderProjects.bind(this)
  }
  renderProjects (data) {
    return this.state.projects.map(proj => (
      <Collapsible popout>
        <CollapsibleItem key={proj._id} header={proj.name}
          icon='folder'>
          {proj.description}
          <Link to={{ pathname: '/project:details/', state: {projectId: proj._id} }}>
            <i className='material-icons'>assignment</i>
          </Link>
        </CollapsibleItem>
      </Collapsible>
      )
    )
  }
  componentDidMount () {
    // get general User info (me) to populate sidebar and maintain state.
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })

//  Get user Projects (me) and set the resulting array of projects in state.
    getProjectInfo()
      .then(res => {
        this.setState({projects: res.data.me.projectsConnection.projects})
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <HomeNav />
        <SlidingSideNav user={this.state.user} />
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
