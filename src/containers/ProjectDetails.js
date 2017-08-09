import React, {Component} from 'react'
import HomeNav from '../components/Recurrent/HomeNav'
import SlidingSideNav from '../components/UserHome/SlidingSideBar'
import Footer from '../components/Recurrent/Footer'
import {
  getMyInfo,
  getProjectInfo,
  searchProjectById
} from '../utils/apolloHelpers.js'

import {
  Collection, // Collection and CollectionItems for comments
  CollectionItem,
  Collapsible, // Collapsible and Collapsible items for Tasks
  CollapsibleItem
 } from 'react-materialize'

// Project details page to display the full description of a project as well as show tasks and comments
// Data needed will be the specific project that was clicked.
// Project Data will be (Title, Desc, Tech, Users)
// Other data includes task and comments

class ProjectDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      project: {},
      tasks: []
      // projectId: ''
    }
  }
  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
    // Retrieve project details by ID
    searchProjectById(this.props.location.state.projectId)
    .then(res => {
      this.setState({project: res.data.projects[0]})
    })
  }

  render () {
    // const projectDetails = {
    //   name: this.state.project.data.projects[0]
    // }
    console.log(this.state.project)
    return (
      <div>
        <HomeNav />
        <SlidingSideNav user={this.state.user} />
        <div className='container' style={styles.container}>
          {/* HEADER */}
          <section key='header'>
            <div className='row'style={styles.header}>
              {/* UPPER */}
              <div className='row' style={styles.header.upperRow}>
                {/* PROJECT NAME */}
                <div className='col s5' style={{border: '1px solid black'}}>
                  <h4>Project name: {this.state.project.name}</h4>
                </div>
                {/* TECHNOLOGIES USED */}
                <div className='col s7' style={{border: '1px solid black'}}>
                  <h4>TECHNOLOGIES USED</h4>
                </div>
              </div>
              {/* LOWER */}
              <div className='row' style={styles.header.lowerRow}>
                <h4>Description: {this.state.project.description}</h4>
              </div>
            </div>
          </section>
          <section key='body' style={styles.body}>
            {/* TASKS */}
            <section key='tasks'
              style={{overflowY: 'scroll', marginBottom: 150}}>
              <div className='row' style={styles.body.tasks}>
                <Collapsible>
                  <CollapsibleItem header='Task 1'>
                    Task 1
                  </CollapsibleItem>
                  <CollapsibleItem header='Task 2'>
                    Task 2
                  </CollapsibleItem>
                  <CollapsibleItem header='Task 3'>
                    Task 3
                  </CollapsibleItem>
                  <CollapsibleItem header='Task 4'>
                    Task 4
                  </CollapsibleItem>
                  <CollapsibleItem header='Task 5'>
                    Task 5
                  </CollapsibleItem>
                  <CollapsibleItem header='Task 6'>
                    Task 6
                  </CollapsibleItem>
                  <CollapsibleItem header='Task 7'>
                    Task 7
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </section>
            {/* COMMENTS */}
            <section key='comments' style={{overflowY: 'scroll'}}>
              <div className='row' style={styles.body.comments}>
                <Collection>
                  <CollectionItem>Comment 1</CollectionItem>
                  <CollectionItem>Comment 2</CollectionItem>
                  <CollectionItem>Comment 3</CollectionItem>
                  <CollectionItem>Comment 4</CollectionItem>
                  <CollectionItem>Comment 5</CollectionItem>
                  <CollectionItem>Comment 6</CollectionItem>
                  <CollectionItem>Comment 7</CollectionItem>
                </Collection>
              </div>
            </section>
          </section>
        </div> {/* end container */}
        <Footer />
      </div>
    )
  }
}

export default ProjectDetails

const styles = {
  container: {
    border: '.5px lightgrey solid',
    minHeight: 700,
    marginBottom: 30,
    boxShadow: '1px 1px 2px 2px #888888'
  },
  header: {
    // border: '2px solid black',
    margin: 0,
    minHeight: '200px',
    upperRow: {
      margin: 0,
      border: '1px solid black',
      minHeight: 70
    },
    lowerRow: {
      margin: 0,
      border: '1px solid black',
      minHeight: 130
    }
  },
  body: {
    border: '1px solid black',
    height: 800,
    paddingTop: 120,
    tasks: {
      margin: 0,
      border: '3px solid red',
      minHeight: 230,
      maxHeight: 230
    },
    comments: {
      margin: 0,
      border: '3px solid blue',
      minHeight: 230,
      maxHeight: 230
    }
  }
}
