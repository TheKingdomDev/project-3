import React, { Component } from 'react'
import Navigation from '../../components/Recurrent/Navigation'
import Footer from '../../components/material-ui/Recurrent/Footer'

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
        <Navigation user={this.state.user}
          handleToggle={this.handleToggle}
          open={this.state.open}
        />
        <div className='w3-container'>
          <div className='w3-row'>
            <div className='w3-col m4 l3'>
              <p>12 columns on a small screen, 4 on a medium screen, and 3 on a large screen.</p>
            </div>
             <div className='w3-col m8 l9'>
              <p>12 columns on a small screen, 8 on a medium screen, and 9 on a large screen.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
