import React, { Component } from 'react'

class ViewUserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  render () {
    console.log(this.props.match)
    return (
      <div>
        <p>Hello World View Profile</p>
        <p>{this.props.match.params.githubLogin}</p>
      </div>
    )
  }
}

export default ViewUserProfile
