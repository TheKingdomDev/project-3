import React from 'react'
import {List, ListItem} from 'material-ui/List'

const ProjectTasks = (props) => {
  return (
    <div>
      <List>
        <ListItem>{this.props.tasks}</ListItem>
      </List>
    </div>
  )
}

export default ProjectTasks
