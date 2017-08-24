import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Recurrent/Navigation'
import NewCreateProject from '../components/Projects/NewCreateProject'
import { getMyInfo, getMyProjects } from '../utils/apolloHelpers.js'
import { List, ListItem } from 'material-ui/List'
import SubHeader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import SpecialFolder from 'material-ui/svg-icons/file/folder'
import FontIcon from 'material-ui/FontIcon'

class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      projects: [],
      open: false
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  addNewProject = (proj) => (this.setState({projects: this.state.projects.concat(proj)}))

  renderProjects = (data) => (
      <List>
        {this.state.projects.map((e,i) => (
          <div>
            <ListItem key={e._id} primaryText={e.name} leftAvatar={<SpecialFolder />} secondaryText={e.description}>
              <FontIcon style={{ right: 100, position: 'absolute', fontSize: 30 }} className='devicons devicons-javascript' />
              <FontIcon style={{ right: 60, position: 'absolute', fontSize: 30  }} className='devicons devicons-nodejs_small' />
              <FontIcon style={{ right: 20, position: 'absolute', fontSize: 30  }} className='devicons devicons-sass' />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
  )

  async componentDidMount () {
    this.setState({
      user: this.props.location.state
        ? this.props.location.state.user
        : await getMyInfo().then(res => res.data.me)
    })

    getMyProjects().then(res => 
      this.setState({ 
        projects: res.data.me.projectsConnection.projects 
      }))
  }

  render () {
    return (
      <div>
        <Navigation user={this.state.user} handleToggle={this.handleToggle} open={this.state.open} />
        <div style={{ maxWidth: 800, margin:'0 auto'}}>
          <SubHeader>Projects</SubHeader>
          {this.renderProjects()}
        </div>
        <br />
        <div style={{'margin': '0 auto', 'maxHeight': '150px', 'maxWidth': '300px'}}>
          {<NewCreateProject addNewProject={this.addNewProject} />}
        </div>
        
      </div>
    )
  }
}

export default Project
