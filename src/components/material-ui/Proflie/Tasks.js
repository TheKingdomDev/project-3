import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import FileFolder from 'material-ui/svg-icons/file/folder'
import ActionInfo from 'material-ui/svg-icons/action/info'
import { blue500 } from 'material-ui/styles/colors'

const Tasks = (props) => {
  return (
    <ListItem>
      <Subheader inset={true}>Tasks</Subheader>
      <List>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={'Task 1 | Status: Completed'}
          secondaryText={'Project: TEST PROJECT'}
        />
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={'Task 2 | Status: Uncompleted'}
          secondaryText={'Project: Team Erlang'}
        />
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={'Task 3 | Status: Uncompleted'}
          secondaryText={'Project: Test 2'}
        />
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={'Task 4 | Status: Completed'}
          secondaryText={'Project: Super Mario World'}
        />
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={'Task 5 | Status: Uncompleted'}
          secondaryText={'Project: Demo Project'}
        />
      </List>
    </ListItem>
  )
}

export default Tasks
