import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

export default class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false}

    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle () {
    this.setState({open: !this.state.open})
  }
  render () {
    return (
      <div>
        <RaisedButton
          label='Open'
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Drawer>
      </div>
    )
  }
}
