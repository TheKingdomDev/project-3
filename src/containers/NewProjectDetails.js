import React, {Component} from 'react'
import Navigation from '../components/Recurrent/Navigation'
import Footer from '../components/Recurrent/Footer'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
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
      open: false,
      openTasks: false,
      openComments: false,
      openApplication: false
    }
    this.handleOpenTasks = this.handleOpenTasks.bind(this)
    this.handleOpenComments = this.handleOpenComments.bind(this)
    this.handleOpenApplication = this.handleOpenApplication.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleToggle = () => this.setState({ open: !this.state.open })
  handleOpenTasks () {
    this.setState({openTasks: true})
  }
  handleOpenComments () {
    this.setState({openComments: true})
  }
  handleOpenApplication () {
    this.setState({openApplication: true})
  }
  handleClose () {
    this.setState({openTasks: false, openComments: false, openApplication: false})
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
        <Navigation user={this.state.user} handleToggle={this.handleToggle} open={this.state.open} />
        <Card>
          <CardHeader
            title={this.state.project.name}
            subtitle='Here are the details on this project'
            actAsExpander={true}
            showExpandableButton={true}
            />
          <CardActions>
            <RaisedButton label='Tasks' secondary={true} onClick={this.handleOpenTasks} />
            <Dialog
              title='Tasks'
              actions={actions}
              modal={true}
              open={this.state.openTasks}
              >
            Tasks
          </Dialog>
            <RaisedButton label='Comments' secondary={true} onClick={this.handleOpenComments} />
            <Dialog
              title='Comments'
              actions={actions}
              modal={true}
              open={this.state.openComments}
              >
            Comments
          </Dialog>
            <RaisedButton label='Apply' secondary={true} onClick={this.handleOpenApplication} />
            <Dialog
              title='Application'
              actions={actions}
              modal={true}
              open={this.state.openApplication}
              >
            Application Form
          </Dialog>
            <RaisedButton label='Delete' disabled={true} />
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
