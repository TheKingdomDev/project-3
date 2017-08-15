import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import customTheme from './config/Theme.js'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// Optimizes touch interaction for mobile devices
// http://stackoverflow.com/a/34015469/988941
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
