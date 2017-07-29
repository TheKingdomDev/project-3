import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import primary containers
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Project from '../containers/Project'
import App from '../App'
import Registration from '../containers/Registration'
import Access from '../containers/Access'
// routing
const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/registration' component={Registration} />
      <Route path='/login' component={Access} />
      <Route path='/profile' component={Profile} />
      <Route path='/project' component={Project} />
    </Switch>
  </Router>
)

export default routes
