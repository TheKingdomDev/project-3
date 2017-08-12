import React, { Component } from 'react'
import Navigation from '../components/Recurrent/Navigation'

// WILL BE REMOVED ONCE REFACTOR IS COMPLETE
// import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 

import { getMyInfo, searchbyName } from '../utils/apolloHelpers'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //    authenticated User
      user: {},
      //    list of Users from Search
      users: [],
      //    list of Projects from Search    
      projects: [],
      //    controls menu open/closed state
      open: false
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  //  TODO = Refoactor function (and state) to pass all results into the 'data' object.  Use' loading' to render loader when making changes 
  //  TODO = enable Pagination for search or 'load more functionality.
  getSearchResults = (e) => {
    searchbyName(e.target.value)
      .then(res => {
        this.setState({
          users: res.data.users,
          projects: res.data.projects
        })
      })
  }

  async componentDidMount() {
//  Checks to see if User was passed from Previous Page, otherwise if fetches the user from the API.
    this.setState({ user: this.props.location.state
      ? this.props.location.state.user
      : await getMyInfo().then(res => res.data.me)
    })
  }

  render() {
    return (
      // <MuiThemeProvider>
        <Navigation user={this.state.user} handleToggle={this.handleToggle} open={this.state.open} />
      // </MuiThemeProvider>
    )
    
  }
}
