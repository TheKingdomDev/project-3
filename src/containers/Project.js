import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Recurrent/Navigation'
import NewCreateProject from '../components/Projects/NewCreateProject'
import Footer from '../components/Recurrent/Footer'
import { getMyInfo, getProjectInfo } from '../utils/apolloHelpers.js'
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
      projects: [
        {id: 1, name: 'project one', description: 'this is a project', tech: ['JavaScript', 'Python', 'Ruby']},
        {id: 2, name: 'project two', description: 'this is another project', tech: ['JavaScript', 'C#', 'Java']}
      ],
      open: false
    }
    this.renderProjects = this.renderProjects.bind(this)
  }

  handleToggle = () => this.setState({ open: !this.state.open })
  renderProjects (data) {
    return this.state.projects.map(e => (
      <div>
        <SubHeader>Projects</SubHeader>
        <List>
          <ListItem key={e._id} primaryText={e.name} leftAvatar={<SpecialFolder />} secondaryText={e.description}>
            <FontIcon style={{ right: 100, position: 'absolute', fontSize: 30 }} className='devicons devicons-javascript' />
            <FontIcon style={{ right: 60, position: 'absolute', fontSize: 30  }} className='devicons devicons-nodejs_small' />
            <FontIcon style={{ right: 20, position: 'absolute', fontSize: 30  }} className='devicons devicons-sass' /></ListItem>
        </List>
        <Divider />
      </div>
    ))
  }
  componentDidMount () {
    getMyInfo()
    .then(res => {
      this.setState({user: res.data.me})
    })
  //   getProjectInfo()
  //   .then(res => {
  //     this.setState({projects: res.data.me.projectsConnection.projects})
  //   })
  //   .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <Navigation user={this.state.user} handleToggle={this.handleToggle} open={this.state.open} />
        {this.renderProjects()}
        <br />
        {<NewCreateProject />}
        <Footer />
      </div>
    )
  }
}

export default Project
