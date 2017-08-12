import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
// import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
// import SideNav from '../../../components/material-ui/Recurrent/SideNav'

class HomeNav extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    // this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle = () => this.setState({open: !this.state.open})

  handleLogoTap = () => {
    return <Link to='/home' />
  }

  render () {
    return (
      <div>
        <AppBar
          title={<Link to='/home'><span style={styles.title}> StackTeam </span></Link>}
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <AppBar
            showMenuIconButton={false}
            iconElementRight={<IconButton><NavigationClose /></IconButton>}
            onRightIconButtonTouchTap={this.handleToggle}
            />
          <MenuItem><Link to='/home'>Home</Link></MenuItem>
          <MenuItem><Link to='/project'>Projects</Link></MenuItem>
          <MenuItem><Link to='/profile'>Profile</Link></MenuItem>
        </Drawer>
      </div>
    )
  }
}

const styles = {
  title: {
    cursor: 'pointer',
    color: 'white'
  }
}

export default HomeNav
