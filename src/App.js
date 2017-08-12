import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import customTheme from './config/Theme.js'

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()

import Routes from './config/routes'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
      <Routes />
    </MuiThemeProvider>
)
  }
}

export default App
