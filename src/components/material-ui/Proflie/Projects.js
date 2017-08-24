import React from 'react'
// For Projects
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
// this will link to the project's project details page
import ActionInfo from 'material-ui/svg-icons/action/info'
import { yellow600 } from 'material-ui/styles/colors'

const Projects = (props) => {
  var projects = props.myProjects.map(project => {
    return (
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
        rightIcon={<ActionInfo />}
        primaryText={project.name}
        secondaryText={project.createdDate}
        key={project._id}
      />
    )
  })
  return (
    <List>
      <Subheader inset={true}>Projects Created</Subheader>
      {projects}
    </List>
  )
}

export default Projects
