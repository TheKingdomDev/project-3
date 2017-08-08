import React from 'react'
import { Tabs, Tab } from 'react-materialize'

const HomeContent = () => (
  <div className='container'>
    <div className='projectTab' />
    <div className='personTab' />
    <h2 className='center' style={styles.resultsHeader}>Results</h2>
    <div className='contentContainer' style={styles.resultsContainer}>
      <Tabs className='tab-demo z-depth-1'>
        <Tab active title='projects' style={styles.resultsContainer}>
          [Projects] search results here
        </Tab>
        <Tab title='users' style={styles.resultsContainer}>
          [Users] search results here
        </Tab>
      </Tabs>
    </div>
  </div>
)

export default HomeContent

const styles = {
  resultsHeader: {
    fontFamily: 'Share Tech Mono'
  },

  resultsContainer: {
    border: '2px solid lightgrey',
    marginBottom: '20px',
    minHeight: '500px',
    minWidht: '630px',
    boxShadow: '1px 1px 2px 2px #888888'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}
