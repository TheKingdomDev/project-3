import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import { grey100 } from 'material-ui/styles/colors'

const styles = {
  navigation: {
    textAlign: 'center',
    fontFamily: 'Share Tech Mono',
    fontSize: 35,
    textDecoration: 'none'
  }
}

const Navigation = (props) => (
  <div>
    <AppBar
      title={<Link to='/home'>{'<ST />'}</Link>}
      style={styles.navigation}
      iconElementRight={<FlatButton href="/auth/logout" labelPosition='before' label="Logout" />}
  
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
      <Link to='/home'><MenuItem>Home</MenuItem></Link>
      <Link to='/profile'><MenuItem>Profile</MenuItem></Link>
      <Link to='/project'><MenuItem>Projects</MenuItem></Link>
      <Link to='/tasks'><MenuItem>Tasks</MenuItem></Link>
    </Drawer>
  </div>
)

export default Navigation
