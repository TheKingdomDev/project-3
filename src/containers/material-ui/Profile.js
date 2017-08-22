import React, { Component } from 'react'
import { grey300 } from 'material-ui/styles/colors'
import Navigation from '../../components/Recurrent/Navigation'
import Footer from '../../components/material-ui/Recurrent/Footer'
import AvatarCard from '../../components/material-ui/Proflie/AvatarCard'
// For skills and accounts
import { Tabs, Tab } from 'material-ui/Tabs'
// For Projects
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import ActionInfo from 'material-ui/svg-icons/action/info' // this will link to the
                                                          // project's project details page



// We will need this to fetch data needed to populate User Profile
import { getMyInfo, getProjectInfo } from '../../utils/apolloHelpers'

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
      allProjects: []

    }
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
      .then(returnedProjects => {
        myProjects = returnedProjects.data.me.projectsConnection.projects
        this.setState({authenticatedUser: me, myProjects: myProjects})
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
                <List>
                  <Subheader inset={true}>Projects Created</Subheader>
                    <ListItem
                      leftAvatar={<Avatar icon={<FileFolder />} />}
                      rightIcon={<ActionInfo />}
                      primaryText='Project 1'
                      secondaryText='Aug 22, 2017'
                    />
                </List>
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
    backgroundColor: 'rgb(48, 48, 48)'
  }
}
