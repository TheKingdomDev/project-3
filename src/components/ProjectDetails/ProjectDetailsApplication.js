import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class ProjectApplication extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Message'
    }
  }
  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  render () {
    return (
      <div>
        <TextField
          id='applyMessage'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default ProjectApplication
