import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// import primary containers
import Landing from '../components/Landing/Landing'
import Home from '../containers/Home'
import Access from '../containers/Access'
// import Profile from '../containers/Profile'
import Profile from '../containers/material-ui/Profile'
import Project from '../containers/Project'
import ViewUserProfile from '../containers/ViewUserProfile'
import ProjectDetails from '../containers/ProjectDetails'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// Optimizes touch interaction for mobile devices
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
// routing
const routes = (props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={Access} />
      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/profile' component={Profile} />
      <PrivateRoute path='/project' component={Project} />
      <PrivateRoute path='/profile:view' component={ViewUserProfile} />
      <PrivateRoute path='/project:details' component={ProjectDetails} />
    </Switch>
  </Router>
)

export default routes
