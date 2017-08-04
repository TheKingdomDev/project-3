import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../utils/apolloHelpers'

class PrivateRoute extends Component {

  constructor (props) {
    super(props)
      this.state = {
        loggedIn: false
      }
    } 

  componentDidMount() {
    isAuthenticated()
    .then(res => {
      this.setState({ loggedIn: true})
    })
    .catch(err => {
      console.log(err)
    })
  }

componentDidUpdate() {
    console.log(this.state)
}

  render () {
    return (
       this.state.loggedIn
       ? <Route path={this.props.path} component={this.props.component} loggedIn={this.state.loggedIn}/>
       : <Redirect to='/' />
    )
  }
}

export default PrivateRoute
