import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import { grey300 } from 'material-ui/styles/colors'


import Navigation from '../components/Recurrent/Navigation'
import SearchTabs from '../components/UserHome/SearchTabs'

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
      open: false,

      searchBy: 1
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleChange = (event, idx, value) => this.setState({ searchBy: value})

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
      <div >
        <Navigation user={this.state.user} handleToggle={this.handleToggle} open={this.state.open} />
        <div style={{ width: '80%', margin:'0 auto'}}> 
          <TextField
            hintText="e.g. Javascript"
            floatingLabelText={<span><FontIcon className="material-icons">search</FontIcon>{` Search`}</span>}
            floatingLabelStyle={{ fontSize: 20, marginBottom: 5, color: grey300, }}
            floatingLabelFixed={true}
            fullWidth={true}
          />
          <DropDownMenu value={this.state.searchBy} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Name" />
            <MenuItem value={2} primaryText="Technology" />
          </DropDownMenu>
          <SearchTabs user={this.state.user}/>
        </div>
      </div>
    )
  }
}
