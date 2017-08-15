import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import { grey100 } from 'material-ui/styles/colors'

const Navigation = (props) => (
  <div>
    <AppBar
      title='stackTeam'
      iconClassNameRight={props.user._id
        ? 'muidocs-icon-navigation-expand-more'
        : ''}
      onLeftIconButtonTouchTap={props.handleToggle}
    />
    <Drawer open={props.open}>
      <AppBar
        showMenuIconButton={false}
        iconElementRight={<IconButton><NavigationClose /></IconButton>}
        onRightIconButtonTouchTap={props.handleToggle}
      />
      <Card>
        <Link to='/profile'>
          <CardMedia
            overlay={<CardTitle title={props.user.displayName}
              subtitle={
                <span> <FontIcon className='devicons devicons-github_badge' color={grey100} />
                  {`${props.user.githubLogin}`}</span>}
            />}
          >
            <img src={props.user.profilePictureURL} alt='user-profile-picture' />
          </CardMedia>
        </Link>
      </Card>
      <Link to='/profile'><MenuItem>Profile</MenuItem></Link>
      <Link to='/project'><MenuItem>Projects</MenuItem></Link>
      <Link to='/tasks'><MenuItem>Tasks</MenuItem></Link>
    </Drawer>
  </div>
)

export default Navigation
