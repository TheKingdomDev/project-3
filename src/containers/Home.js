import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { grey100 } from 'material-ui/styles/colors';

// WILL BE REMOVED ONCE REFACTOR IS COMPLETE
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 

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

     this.setState({ user: this.props.location.state
//    Checks to see if User was passed from Pervious Page
      ? this.props.location.state.user
//    otherwise if fetches the user from the API.
      : await getMyInfo().then(res => res.data.me)
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <AppBar
          title='Home'
          iconClassNameRight={this.state.user._id
            ? 'muidocs-icon-navigation-expand-more'
            : ''}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
            <AppBar
              showMenuIconButton={false}
              iconElementRight={<IconButton><NavigationClose /></IconButton>}
              onRightIconButtonTouchTap={this.handleToggle}
            />
            <Card>
              <Link to='/profile'>
                <CardMedia
                  overlay={<CardTitle title={this.state.user.displayName} 
                    subtitle={
                      <span> <FontIcon className='devicons devicons-github_badge' color={grey100}/> 
                     {` ${this.state.user.githubLogin}`}</span>} 
                  />}
                >
                  <img src={this.state.user.profilePictureURL} alt="" />
                </CardMedia>
              </Link>
            </Card>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Tasks</MenuItem>
        </Drawer>
        </div>
      </MuiThemeProvider>
    )
    
  }
}
