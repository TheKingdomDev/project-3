import React, { Component } from 'react'
import { grey300 } from 'material-ui/styles/colors'
import Navigation from '../../components/Recurrent/Navigation'
import Footer from '../../components/material-ui/Recurrent/Footer'
import AvatarCard from '../../components/material-ui/Proflie/AvatarCard'
// For skills and accounts
import { Tabs, Tab } from 'material-ui/Tabs'
import Projects from '../../components/material-ui/Proflie/Projects'

// We will need this to fetch data needed to populate User Profile
import {
  getMyInfo,
  getProjectInfo,
  GetAllProjects
} from '../../utils/apolloHelpers'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Used to open and close side-navigation
      open: false,
      // Used to store data needed to populate both Profile
      // and navigation components which rely on user data
      authenticatedUser: {},
      // these are all the projects that belong to the authenticated user
      myProjects: [],
      // these all projects available in the database... we'll use them
      // to determine which projects were CREATED by the authenticated user,
      // and which projects he/she are associated with/collaborate to.
      allProjects: [],
      // these are all projects an user is associated with, but is NOT
      // a creator of.
      associatedProjects: []

    }
    this.extractAssociatedProjects = this.extractAssociatedProjects.bind(this)
  }
  // Changes state of side-nav = opens and closes side-nav
  handleToggle = () => this.setState({ open: !this.state.open })

  componentDidMount () {
      let me, myProjects, allProjects
      // Once component has mounted...
      // fetch my info..
      getMyInfo()
      .then(myData => {
        me = myData.data.me
        // this.setState({authenticatedUser: me})
        return getProjectInfo()
      })
      .then(returnedUserProjects => {
        myProjects = returnedUserProjects.data.me.projectsConnection.projects
        // this.setState({authenticatedUser: me, myProjects: myProjects})
        return GetAllProjects()
      }).then(allProjectsReturned => {
        allProjects = allProjectsReturned.data.projects
        this.setState({
          authenticatedUser: me,
          myProjects: myProjects,
          allProjects: allProjects
         })
        // this object holds information about all available projects
        let temp = {
          // an array with the ids of the owner for every project...
          // each index represents a project, and each value an owner
          // ownersIdList: allProjects.map(project => project.owner._id),
          // ========================
           // an array with the ids of all projects
           // each index represents a project, and each value its id
          idList: allProjects.map(project => project._id),
          // an array with the ids of all collaborators for each project
          // this one can get tricky very quickly. it's an array of arrays.
          // each index represents a project... in each index is an array...
          // each array holds the ids of ALL collaborators for that project
          collaboratorsIdList: allProjects.map((project, i) => (
            // project.collaborators.concat(project.owner).concat({projectId: project._id})
            project.collaborators.concat(project.owner)
          ))
        }
        console.log(temp.collaboratorsIdList)
        // here we pass the id of the authenticated user, along
        // with a list/array of collaborator ids for EACH project.
        this.extractAssociatedProjects(me._id, temp)
      })
    }
    extractAssociatedProjects = (authenticatedUser, allProjects) => {
      // an array holding the ids of each project. we will need these
      // to associate a project collaborator to a project
      let projectsById = allProjects.idList
      console.log(projectsById)
      // Here we have the array that holds array of objects
      // which themselves hold the list of ids for collaborators of a project
      let collaborators = allProjects.collaboratorsIdList
      console.log(collaborators)
      collaborators.forEach((projectCollabsArray, i) => {
        // console.log(projectCollabsArray)
        projectCollabsArray.forEach((collabsList, j) => {
          // console.log(collabsList, i)
          if (authenticatedUser === collabsList._id) {
            // console.log(projectsById[i])
            let association = {
              projectId: projectsById[i],
              status: `match found. user IS a collaborator of project with _id ${this.projectId}`
            }
            this.setState({associatedProjects: this.state.associatedProjects.concat(association)})
          }
          else {
            console.log('no match found. user IS NOT a collaborator')
          }

        })
     
      })
    }

  render () {
    console.log(this.state)
    return (
      <div>
        {/* Navigation component */}
        <div id='profile-navigation'>
          <Navigation user={this.state.authenticatedUser}
            handleToggle={this.handleToggle}
            open={this.state.open}
          />
        </div>
        <section className='w3-container w3-mobile' 
          id='profile-main-section'
          style={styles.profileContainer}>
          <div className='w3-row'>
            <div className='w3-col m4 l4 s12'>
              <AvatarCard
                profilePicture={this.state.authenticatedUser.profilePictureURL}
                userBio={this.state.authenticatedUser.githubBio}
                className='w3-mobile'
              />
            </div>
             <div className='w3-col m8 l8 s12'>
              <section id='skills&accounts'>
                <div style={{/* border: '2px solid black', */marginTop: 10, minHeight: 410}}>
                  <Tabs>
                    <Tab label='Skills'>
                      Skills listed here
                    </Tab>
                    <Tab label='Accounts'>
                      Accounts listed here
                    </Tab>
                  </Tabs>
                </div>
              </section>
            </div> {/* end row */}
            <div className='w3-row' id='projects&tasks'
              style={styles.projectsAndTasks}
            >
              <div className='w3-col s12 m6 l6'
                id='user-projects'
                style={styles.lowerBody}
              >
                <Projects myProjects={this.state.myProjects}
                  allProjects={this.state.allProjects} />
              </div>
              <div className='w3-col s12 m6 l6'
                id='user-tasks'
                style={styles.lowerBody}
              >
                Tasks pertaining to X project listed here
              </div>
            </div>
          </div>
        </section> {/* end container */}
        <div id='profile-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Profile

const styles = {
  profileContainer: {
    maxWidth: 1000,
    minHeight: 800,
    margin: '0 auto',
    marginBottom: 10,
    marginTop: 10,
    border: '1px solid #E0E0E0',
    backgroundColor: '#E0E0E0'
  },
  projectsAndTasks: {
    marginTop: 15,
    minHeight: 300
  },
  lowerBody: {
    border: '2px solid black',
    minHeight: 300,
    maxHeight: 300,
    marginTop: 30,
    backgroundColor: 'rgb(48, 48, 48)',
    overflowY: 'scroll'
  }
}
