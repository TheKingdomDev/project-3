import React, {Component} from 'react'

class ViewUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  render () {
    return (
      <div>
        <h1>Hello World View Profile</h1>
      </div>
    )
  }
}

export default ViewUser
