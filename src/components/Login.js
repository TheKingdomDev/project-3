import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => (
  // This row contains input forms
  <div className='container'>
    <div style={styles.wrapper}>
      <div className='row' style={styles.center}>
        <form method='GET' action='/auth/github/login'className='col s12'>
          <p style={styles.contentStyle} >This application requires users to login through GitHub.
          If you have an account simply click the button below. If you don't
          have an account follow <Link to='http://github.com' target='_blank'>this link</Link></p>
          <button type='submit' className='waves-effect waves-light btn' style={styles.button}>
            <i className='devicons devicons-github_badge' />Login with GitHub</button>
        </form>
      </div>
    </div>
    <div className='container'>
      <div className='row' style={styles.center}>
        <div className='col s6' style={styles.contentStyle}>
          <h4>What is GitHub?</h4>
          <br />
          <p>An online development hub that uses <Link to='https://git-scm.com/'target='_blank'>Git</Link> version control to house repositories of code for developers to collaborate on. It is the ideal tool for teams to work on a project together and manage any size project.</p>
        </div>
        <div className='col s6' style={styles.contentStyle}>
          <h4>Why use GitHub?</h4>
          <br />
          <p>GitHub is a fantastic tool to manage versions of code that you want to work on and develop. We require our users to have an account and become familiar with it to help them collaborate effectively!</p>
        </div>
      </div>
    </div>
  </div>
)
export default Login
const styles = {
  button: {
    backgroundColor: '#6ece5a',
    margin: '10px'
  },
  center: {
    textAlign: 'center'
  },
  contentStyle: {
    color: 'black',
    fontFamily: 'Cantarell',
    fontSize: 22,
    textAlign: 'center'
  },
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    height: '300px'
  }
}
// Note to self:
// Should our buttons be <a> tags or <Link /> components?
