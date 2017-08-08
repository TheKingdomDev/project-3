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
      <Route path='/home' component={Home} />
      <Route path='/login' component={Access} />
      <Route path='/profile' component={Profile} />
      <Route path='/project' component={Project} />
      <Route path='/profile:view' component={ViewUserProfile} />
      <Route path='/project:details' component={ProjectDetails} />
    </Switch>
  </Router>
)

export default routes
