import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import primary containers
import Home from '../containers/Home'
import Profile from '../containers/Profile'
// import API from '../utils/apolloHelpers'
import Project from '../containers/Project'
import ProjectDetails from '../containers/ProjectDetails'
import App from '../App'
// import Registration from '../containers/Registration'
import Access from '../containers/Access'

import PrivateRoute from './PrivateRoute'

// routing
const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Access} />
      <PrivateRoute path='/profile' component={Profile} />
      <Route path='/project' component={Project} />
      <PrivateRoute path='/project:details' component={ProjectDetails} />
    </Switch>
  </Router>
)

export default routes
