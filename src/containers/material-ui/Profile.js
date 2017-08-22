import React, { Component } from 'react'
import Navigation from '../../components/Recurrent/Navigation'
import Footer from '../../components/material-ui/Recurrent/Footer'
import AvatarCard from '../../components/material-ui/Proflie/AvatarCard'
import {Tabs, Tab} from 'material-ui/Tabs'

// We will need this to fetch data needed to populate User Profile
import { getMyInfo } from '../../utils/apolloHelpers'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Used to store data needed to populate both Profile
      // and navigation components which rely on user data
      user: {},

      // Used to open and close side-navigation
      open: false
    }
  }
  // Changes state of side-nav = opens and closes side-nav
  handleToggle = () => this.setState({ open: !this.state.open })

  componentDidMount () {
      // Once component has mounted, fetch my info
      getMyInfo()
      .then(myData => {
        this.setState({user: myData.data.me})
      })
    }

  render () {
    console.log(this.state)
    return (
      <div>
        {/* Navigation component */}
        <div id='profile-navigation'>
          <Navigation user={this.state.user}
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
                profilePicture={this.state.user.profilePictureURL}
                userBio={this.state.user.githubBio}
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
                style={{border: '2px red solid'}}
              >
                User projects dumped here
              </div>
              <div className='w3-col s12 m6 l6'
                id='user-tasks'
                style={{border: '2px blue solid'}}
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
  }
}
