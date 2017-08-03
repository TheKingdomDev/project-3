import React from 'react'
// import { Link } from 'react-router-dom'

const Login = () => (
  // This row contains input forms
  <div className='container'>
    <div className='valign-wrapper'>
      <form method='GET' action='/auth/github/login'>
        <p style={styles.center} >This application requires users to login through GitHub.
          If you have an account simply click the button below. If you don't
          have an account follow <a href='http://github.com'>this link</a></p>
        <button type='submit' className='waves-effect waves-light btn' style={styles.button}>
          <i className='devicons devicons-github_badge' />Login with GitHub</button>
      </form>
    </div>
  </div>
)

export default Login

const styles = {
  button: {
    backgroundColor: '#6ece5a',
    margin: '10px',
    marginLeft: '200px'
  },

  center: {
    textAlign: 'center'
  }
}

// Note to self:
// Should our buttons be <a> tags or <Link /> components?
