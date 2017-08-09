import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import primary containers
import App from '../App'
import Home from '../containers/Home'
import Access from '../containers/Access'
import Profile from '../containers/Profile'
import Project from '../containers/Project'
import ViewUserProfile from '../containers/ViewUserProfile'
import ProjectDetails from '../containers/ProjectDetails'

import PrivateRoute from './PrivateRoute'

// routing
const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
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
