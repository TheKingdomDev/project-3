import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from 'material-ui/List/ListItem'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'

const SearchResult = (props) => (
  <Link to={{ pathname: `/users/${props.user.githubLogin}`, state: { me: props.user} }}>
  <ListItem
    disabled={true}
    leftAvatar={<Avatar src={props.user.profilePictureURL} />}
    primaryText={props.user.displayName}
    secondaryText={props.user.githubLogin}
  >
    <FontIcon style={{ right: 100, position: 'absolute', fontSize: 30 }} className='devicons devicons-javascript' />
    <FontIcon style={{ right: 60, position: 'absolute', fontSize: 30  }} className='devicons devicons-nodejs_small' />
    <FontIcon style={{ right: 20, position: 'absolute', fontSize: 30  }} className='devicons devicons-sass' />
  </ListItem>
   <Divider />
  </Link>

)

export default SearchResult