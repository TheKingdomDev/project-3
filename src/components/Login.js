import React from 'react'

const Login = () => (
  <div className='row'>
    <form className='col s12'>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='Placeholder' id='user' type='text' className='validate' />
          <label htmlFor='user'>Username: </label>
        </div>
        <div className='input-field col s6'>
          <input id='pass' type='text' className='validate' />
          <label htmlFor='pass'>Password: </label>
        </div>
      </div>
      <div className='row'>
        <a className='waves-effect waves-light btn' type='submit' name='action'>Login</a>
        <a className='waves-effect waves-light btn' type='submit' name='action'>Login with: </a>
      </div>
    </form>
  </div>
)

export default Login
