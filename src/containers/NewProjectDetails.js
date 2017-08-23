import React, {Component} from 'react'
import HomeNav from '../components/Recurrent/HomeNav'
import Footer from '../components/Recurrent/Footer'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import {
  getMyInfo,
  getProjectInfo,
  searchProjectById
} from '../utils/apolloHelpers.js'

class NewProjectDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      project: {},
      tasks: [],
      open: false
    }
  }
  handleOpen () {
    this.setState({open: true})
  }
  handleClose () {
    this.setState({open: false})
  }
  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
    // Retrieve project details by ID
    searchProjectById(this.props.location.state.projectId)
    .then(res => {
      this.setState({project: res.data.projects[0]})
    })
  }
  render () {
    const actions = [
      <RaisedButton
        label='Cancel'
        onClick={this.handleClose} />
      <RaisedButton
        label='Submit'
        onClick={this.handleClose} />
    ]
  return (
    <div>
    <HomeNav />
    <Card>
      <CardHeader
        // title={this.props.project}
        title='Project Title'
        subtitle='Here are the details on this project'
        actAsExpander={true}
        showExpandableButton={true}
        />
      <Dialog
        title='Tasks'
        actions={actions}
        modal={true}
        open={this.state.open}
      >
        Tasks
      </Dialog>
      <CardActions>
        <RaisedButton label='Tasks' onClick={this.handleOpen} />
        <RaisedButton label='Comments' />
        <RaisedButton label='Apply' />
        <RaisedButton label='Delete' />
      </CardActions>
      <CardText expandable={true}>
        {/* this.state.project.description */}
        {/* this.state.project.owner */}
        {/* this.state.project.collaborators */}
        {/* this.state.project.githubRepo */}
        Here is where we display the description, tech, collaborators, github repo
      </CardText>
    </Card>
    <Footer />
  </div>
  )
      
  }
}

export default NewProjectDetails
