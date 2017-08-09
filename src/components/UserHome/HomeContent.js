import React from 'react'
import { Tabs, Tab, Col, Card, CardTitle } from 'react-materialize'

const HomeContent = (props) => (
  <div className='container'>
    <div className='projectTab' />
    <div className='personTab' />
    <h2 className='center' style={styles.resultsHeader}>Results</h2>
    <div className='contentContainer' style={styles.resultsContainer}>
      <Tabs className='tab-demo z-depth-1'>
        <Tab active title='projects' style={styles.resultsContainer}>
          
          {props.projects.map((ele, i) => (
            <Col m={6} s={12} key={i}>
              <Card key={ele._id} className='blue darken-1' textClassName='white-text' title={ele.name} actions={[<a href='#'>View Details</a>]}>
                {ele.description}
		          </Card>
            </Col>
          ))}
          
        </Tab>
        <Tab title='users' style={styles.resultsContainer}>
          {props.users.map((user, i) => (
            <Col m={4} s={6} l={3} key={i}>
              <Card key={user._id} className='blue darken-1' textClassName='white-text' header={<CardTitle image={user.profilePictureURL}>{user.displayName}</CardTitle>} actions={[<a href='#'>View Profile</a>]} />
            </Col>
          ))}
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
  }
}
