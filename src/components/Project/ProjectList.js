import React from 'react'

const ProjectList = () => (
  <div className='row'>
    <div className='col s12' style={styles.contentStyle}>
      <h1>Your Projects: </h1>
    </div>
    <div className='row'>
      <div className='col s12' style={styles.contentStyle}>
        <h4>Add a new project: </h4>
        <button className='btn waves-effect waves-light' style={styles.button}>New Project</button>
      </div>
    </div>
  </div>
)

const styles = {
  contentStyle: {
    color: 'black',
    fontFamily: 'Share Tech Mono',
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#6ece5a',
    margin: '10px',
    fontFamily: 'Share Tech Mono'
  }
}

export default ProjectList
