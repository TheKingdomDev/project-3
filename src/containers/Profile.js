import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Recurrent/Navbar'
import Footer from '../components/Recurrent/Footer'
import { gql, graphql, ApolloProvider } from 'react-apollo'
import API from '../utils/apolloHelpers'

import {
  AvatarCard,
  Skills,
  Accounts,
  Bio,
  Projects,
  Tasks
 } from '../components/Profile/index'

import { getMyInfo } from '../utils/apolloHelpers.js'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
        // we will set the necessary user info here
        // and pass it DOWN as props to the respective
        // child components
    }
  }

  async setMyInfo() {
    const res = await getMyInfo()
    await this.setStateAsync({ user: res.data.me })
  }

  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
    console.log(this.state.user)
  }

  componentDidUpdate () {
    console.log(this.state.user)
  }

  render () {
    // checking if data was passed as prop
    // if (this.props.data){
    //   let userData = this.props.data
    //   console.log(userData)
    // }
    console.log(this.props)
    return (
      <div>
        <Navbar/>
        <div className='container' style={{marginTop: '20px'}}>
          <div className='row'>
            <div className='col s4' style={{border:'1px solid blue'}}>
              <AvatarCard user={this.state.user}/>   
            </div>
            <div className='col s8' style={{border:'1px solid red', height: '515.5px'}}>
              <div className='container'>
                <Skills /> 
                <Accounts />   
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12' style={{border:'1px solid purple', minHeight: '125px'}}>
              <Bio />  
            </div>
            <div className='col s12' style={{border:'1px solid green', minHeight: '125px'}}>
              <Projects />   
            </div>
            <div className='col s12' style={{border:'1px solid orange', minHeight: '125px'}}>
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
