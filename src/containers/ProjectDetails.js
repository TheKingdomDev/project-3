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
        <div className='container' style={styles.container}>
          {/* HEADER */}
          <section key='header'>
            <div className='row'style={styles.header}>
              {/* UPPER */}
              <div className='row' style={styles.header.upperRow}>
                {/* PROJECT NAME */}
                <div className='col s5' style={{border: '1px solid black'}}>
                  <h4>PROJECT NAME</h4>
                </div>
                {/* TECHNOLOGIES USED */}
                <div className='col s7' style={{border: '1px solid black'}}>
                  <h4>TECHNOLOGIES USED</h4>
                </div>
              </div>
              {/* LOWER */}
              <div className='row' style={styles.header.lowerRow}>
                <h4>PROJECT DESCRIPTION</h4>
              </div>
            </div>
          </section>
          <section key='body' style={styles.body}>
            {/* TASKS */}
            <div className='row' style={styles.body.tasks}>
              <h4>PROJECT TASKS</h4>
            </div>
            {/* COMMENTS */}
            <div className='row' style={styles.body.comments}>
              <h4>PROJECT COMMENTS</h4>
            </div>
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
    border: '1px black solid',
    minHeight: 700,
    marginBottom: 30
  },
  header: {
    border: '2px solid red',
    margin: 0,
    minHeight: '200px',
    upperRow: {
      margin: 0,
      border: '3px solid orange',
      minHeight: 70
    },
    lowerRow: {
      margin: 0,
      border: '3px solid blue',
      minHeight: 130
    }
  },
  body: {
    border: '2px solid green',
    height: 500,
    paddingTop: 35,
    tasks: {
      margin: 0,
      border: '3px solid red',
      minHeight: 200,
      marginBottom: 20
    },
    comments: {
      margin: 0,
      border: '3px solid blue',
      minHeight: 200
    }
  }
}
