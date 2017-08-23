import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const ProjectTasks = (props) => {
  return (
    <div>
      <List>
        <ListItem>Task 1</ListItem>
        <Divider />
        <ListItem>Task 2</ListItem>
      </List>
    </div>
  )
}

export default ProjectTasks
