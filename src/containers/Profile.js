import React, { Component } from 'react'
import HomeNav from '../components/Recurrent/HomeNav'
import SlidingSideBar from '../components/UserHome/SlidingSideBar'
import Footer from '../components/Recurrent/Footer'
import { gql, graphql, ApolloProvider } from 'react-apollo'
import API from '../utils/apolloHelpers'

// Importing Skills and Accounts, Projects and Tasks 
//components through respective containers
import SkillsAndAccountsContainer from './SkillsAndAccounts'
import ProjectsAndTasksContainer from './ProjectsAndTasks'

import {
  AvatarCard,
  Bio,
  Projects,
  Tasks
 } from '../components/Profile/index'

import { getMyInfo } from '../utils/apolloHelpers.js'
import { getFullProfileInfo } from '../utils/apolloHelpers.js'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      userProfiles: {}
    }
  }

  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
    console.log(this.state.user)
    getFullProfileInfo()
    .then(res => {
      console.log(`ACCOUNTS: ${res}`)
    })
  }

  componentDidUpdate () {
    console.log(this.state.user)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <HomeNav />
        <SlidingSideBar user={this.state.user}/>
        <div className='container' style={{marginTop: '20px'}}>
          <div className='row' style={{border:'2px solid lightgrey', padding: '5px'}}>
            <div className='col s4' /* style={{border:'1px solid blue'}} */>
              <AvatarCard user={this.state.user}/>   
            </div>
            <div className='col s8' /* style={{border: '1px solid red', height: '515.5px'}} */>
              <div style={{width: '100%', padding: '0'}}>
                <SkillsAndAccountsContainer />
              </div>
            </div>
          </div>
          <div className='row' style={{border:'2px solid lightgrey', padding: '5px'}}>
            <div className='col s6' style={{border: '1px solid blue', minHeight: '125px'}}>
              <Projects />
            </div>
            <div className='col s6' style={{border: '1px solid green', minHeight: '125px'}}>
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

// Profile.propTypes = {
//   data: PropTypes.shape({
//     loading: PropTypes.bool.isRequired,
//     currentUser: PropTypes.object,
//   }).isRequired,
// }

export default Profile
