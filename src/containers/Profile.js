import React, { Component } from 'react'
import HomeNav from '../components/Recurrent/HomeNav'
import SlidingSideBar from '../components/UserHome/SlidingSideBar'
import Footer from '../components/Recurrent/Footer'
import { gql, graphql, ApolloProvider } from 'react-apollo'

// Importing Skills and Accounts, Projects and Tasks
// components through respective containers
import SkillsAndAccountsContainer from './SkillsAndAccounts'
import {
  API,
  getMyInfo,
  getFullProfileInfo,
  getProjectInfo,
  getMyProjects
} from '../utils/apolloHelpers'

import {
  AvatarCard,
  Projects,
  Tasks
 } from '../components/Profile/index'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      userProfiles: {},
      projects: []
    }
  }

  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
    console.log(this.state.user)
    // getFullProfileInfo()
    // .then(res => {
    //   console.log(`ACCOUNTS: ${res}`)
    // })
    getProjectInfo()
    .then(res => {
      this.setState({projects: res.data.me.projectsConnection.projects})
    })
  }
  render () {
    console.log(this.state)
    return (
      <div>
        <HomeNav />
        <SlidingSideBar user={this.state.user} />
        <div className='container' style={{marginTop: '20px'}}>
          <div className='row' style={{border: '2px solid lightgrey', padding: '5px'}}>
            <div className='col s4' /* style={{border:'1px solid blue'}} */>
              <AvatarCard user={this.state.user} />
            </div>
            <div className='col s8' /* style={{border: '1px solid red', height: '515.5px'}} */>
              <div style={{width: '100%', padding: '0'}}>
                <SkillsAndAccountsContainer />
              </div>
            </div>
          </div>
          <div className='row' style={{border: '2px solid lightgrey', padding: '5px'}}>
            {/* <section style={{overflowY: 'scroll'}}> */}
              <div className='col s6'
                style={{/* border: '1px solid blue', */ minHeight: '200px', maxHeight: '200px', overflowY: 'scroll'}}>
                <Projects items={this.state.projects} />
              </div>
            {/* </section> */}
            <div className='col s6' style={{/* border: '1px solid green', */ minHeight: '125px'}}>
              <Tasks />
            </div>
          </div>
        </div> {/* end main container */}
        <Footer />
      </div>
    )
  }
}

export const ProfileWithClient = () => (
  <ApolloProvider client={API}>
    <Profile />
  </ApolloProvider>
)

// We use the gql tag to parse our query string into a query document
const CurrentUserData = gql`
  query { 
    User {
      me {
        _id
      }
    }
  }
`
export const UserProfileWithData = graphql(CurrentUserData)(Profile)

export default Profile
