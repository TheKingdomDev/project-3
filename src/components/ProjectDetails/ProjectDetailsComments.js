import React, { Component } from 'react'

class ProjectComments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projectComments: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    // handle change for comments made by owner or collaborators
  }
  handleSubmit (e) {
    // handle the submit for the button after filling out the text field
  }
}

export default ProjectComments
