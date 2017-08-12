import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()

import Routes from './config/routes'

class App extends Component {
  render () {
    return (
    <MuiThemeProvider>
      <Routes />
</MuiThemeProvider>
)
  }
}

export default App
