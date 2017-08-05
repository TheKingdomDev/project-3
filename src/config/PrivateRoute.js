import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../utils/apolloHelpers'

class PrivateRoute extends Component {

  constructor (props) {
    super(props)
      this.state = {
        loggedIn: this.checkLoggedIn()
      }
    } 

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }

  checkLoggedIn = async () => {
    const res = await isAuthenticated()
    await this.setStateAsync({ loggedIn: res })
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
