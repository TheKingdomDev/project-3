import React, { Component } from 'react'
import Skills from '../components/Profile/Skills'
import Accounts from '../components/Profile/Accounts'
// import { Link } from 'react-router-dom'
import { Tabs, Tab } from 'react-materialize'

class SkillsAndAccountsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skills: [],
      accounts: []
    }
  }

  render () {
    return (
      <div>
        <Tabs className='tab-demo z-depth-1'>
          <Tab title='Skills' key='skills' style={styles.tabsStyle} active>
            <Skills />
          </Tab>
          <Tab title='Accounts' key='accounts' style={styles.tabsStyle}>
            <Accounts />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default SkillsAndAccountsContainer

const styles = {
  tabsStyle: {
    fontFamily: 'Share Tech Mono',
    color: 'black'
  }
}
