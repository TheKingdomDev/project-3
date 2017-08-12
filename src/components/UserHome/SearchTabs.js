import React, {Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tabs, Tab } from 'material-ui/Tabs'
import List from 'material-ui/List/List'
import FontIcon from 'material-ui/FontIcon'
import SearchResult from './SearchResult'

export default class SearchTabs extends Component {
  constructor(props) {
    super(props)
    this.state = { slideIndex: 0 }
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
          value={0}
        />
        <Tab
          icon={<FontIcon className="material-icons">folder_special</FontIcon>}
          value={1}
        />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleSwipe}
      >
          <List>
           <SearchResult user={this.props.user} />
           <SearchResult user={this.props.user} /> 
           <SearchResult user={this.props.user} /> 
           <SearchResult user={this.props.user} /> 
           <SearchResult user={this.props.user} /> 
          </List>
        <div>
          <p>slide n°2</p>
        </div>
      </SwipeableViews>
    </div>
  )}
}
