import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import MainNav from '../components/Recurrent/MainNav'
import Footer from '../components/Recurrent/Footer'

// Project container to display the user projects
// Data required - UserProjects(Name, Desc, Primary Tech)
class Project extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }
  render () {
    return (
      <div>
        <MainNav />
        <div className='container'>
          <h1>Your Projects: </h1>
          <p>Add A New Project </p>
          <a className='btn-floating btn-large waves-effect waves-light red'><i className='material-icons'>add</i></a>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Project
