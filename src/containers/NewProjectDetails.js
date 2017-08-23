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
      project: {name: 'Test', description: 'Test Description', owner: 'Me', collaborators: ['Tim', 'David', 'JC'], githubRepo: 'Click'},
      tasks: [],
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
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
    // searchProjectById(this.props.location.state.projectId)
    // .then(res => {
    //   this.setState({project: res.data.projects[0]})
    // })
  }
  render () {
    const actions = [
      <div>
        <RaisedButton
          label='Cancel'
          onClick={this.handleClose} />
        <RaisedButton
          label='Submit'
          onClick={this.handleClose} />
      </div>
    ]
    return (
      <div>
        <HomeNav />
        <Card>
          <CardHeader
            title={this.state.project.name}
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
            {this.state.project.description}
            <br />
            {this.state.project.owner}
            <br />
            {this.state.project.collaborators}
            <br />
            {this.state.project.githubRepo}
          </CardText>
        </Card>
        <Footer />
      </div>
    )
  }
}

export default NewProjectDetails
