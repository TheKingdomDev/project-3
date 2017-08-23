import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import { Tabs, Tab } from 'material-ui/Tabs'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import SearchResult from './SearchResult'

export default class SearchTabs extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      slideIndex: 0
    }
  }

  handleSwipe = (val) => {
    this.setState({ slideIndex: val }) 
  }

  render () {
    return (
    <div>
      <Tabs
        onChange={this.handleSwipe}
        value={this.state.slideIndex}
      >
        <Tab
          icon={<FontIcon className="material-icons">face</FontIcon>}
          label="USERS"
          value={0}
        />
        <Tab
          icon={<FontIcon className="material-icons">folder_special</FontIcon>}
          label="Projects"
          value={1}
        />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleSwipe}
      >
          <List>
           {this.props.results.users.map((ele) => ( 
              <Link
                to={{ pathname: `/projects/${ele._id}`, state: { me: this.props.user } }}
                key={ele._id}
              >
                <ListItem
                  disabled={true}
                  leftAvatar={<Avatar src={ele.profilePictureURL} />}
                  primaryText={ele.displayName}
                  secondaryText={ele.githubLogin}
                >
                  <FontIcon style={{ right: 100, position: 'absolute', fontSize: 30 }} className='devicons devicons-javascript' />
                  <FontIcon style={{ right: 60, position: 'absolute', fontSize: 30 }} className='devicons devicons-nodejs_small' />
                  <FontIcon style={{ right: 20, position: 'absolute', fontSize: 30 }} className='devicons devicons-sass' />
                </ListItem>
                <Divider />
              </Link>
           ))}
          </List>
          <List>
            {this.props.results.projects.map((ele) => (
              <Link
                to={{ pathname: `/users/${ele.githubLogin}`, state: { me: this.props.user } }}
                key={ele._id}
              >
                <ListItem
                  disabled={true}
                  leftAvatar={<FontIcon className="material-icons">folder_special</FontIcon>}
                  primaryText={ele.name}
                  secondaryText={ele.owner.displayName}
                >
                  <FontIcon style={{ right: 100, position: 'absolute', fontSize: 30 }} className='devicons devicons-javascript' />
                  <FontIcon style={{ right: 60, position: 'absolute', fontSize: 30 }} className='devicons devicons-nodejs_small' />
                  <FontIcon style={{ right: 20, position: 'absolute', fontSize: 30 }} className='devicons devicons-sass' />
                </ListItem>
                <Divider />
              </Link>
            ))}
          </List>
      </SwipeableViews>
    </div>
  )}
}



