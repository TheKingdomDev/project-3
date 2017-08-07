import React, { Component } from 'react'
import Projects from '../components/Profile/Projects'
import Tasks from '../components/Profile/Tasks'
import { Tabs, Tab } from 'react-materialize'

class ProjectsAndTasksContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      tasks: []
    }
  }

  render () {
    return (
      <div>
        <Tabs className='tab-demo z-depth-1'>
          <Tab title='Projects' key='projects' active>
            <Projects />
          </Tab>
          <Tab title='Tasks' key='tasks'>
            <Tasks />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ProjectsAndTasksContainer

// const styles = {
//   tabsStyle: {
//     fontFamily: 'Share Tech Mono',
//     color: 'black'
//   }
// }
