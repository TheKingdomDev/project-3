import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class ProjectComments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Comment',
      projectComments: {}
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    // handle change for comments made by owner or collaborators
    this.setState({
      value: e.target.value
    })
  }
  render () {
    return (
      <div>
        <TextField
          id='commentField'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div id='commentLocation' />
      </div>
    )
  }
}

export default ProjectComments
