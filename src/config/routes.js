import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import primary containers
import Landing from '../components/Landing'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Project from '../containers/Project'
// routing
const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/project' component={Project} />
    </Switch>
  </Router>
)
// export
export default routes
