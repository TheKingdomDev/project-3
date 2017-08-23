import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// import primary containers
import Landing from '../containers/material-ui/Landing'
import Home from '../containers/Home'
import WhyGitHub from '../containers/material-ui/WhyGitHub'
import Profile from '../containers/material-ui/Profile'
import Project from '../containers/Project'
import ViewUserProfile from '../containers/ViewUserProfile'
import NewProjectDetails from '../containers/ProjectDetails'

const routes = (props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/whygithub' component={WhyGitHub} />
      <Route path='/users/:githubLogin' component={ViewUserProfile} />
      <PrivateRoute path='/home' component={Home} />
      <Route path='/profile' component={Profile} />
      <PrivateRoute path='/project' component={Project} />
      <PrivateRoute path='/profile:view' component={ViewUserProfile} />
      <PrivateRoute path='/project:details' component={NewProjectDetails} />
    </Switch>
  </Router>
)

export default routes
