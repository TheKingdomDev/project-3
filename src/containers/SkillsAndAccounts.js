import React, { Component } from 'react'
import Skills from '../components/Profile/Skills'
import Accounts from '../components/Profile/Accounts'
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
        <Tabs className='tab-demo z-depth-1' key='skills-and-accounts'>
          <Tab title='Skills' style={styles.tabsStyle} active>
            <Skills />
          </Tab>
          <Tab title='Accounts' style={styles.tabsStyle}>
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
