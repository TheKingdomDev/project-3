import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => (
  // This row contains input forms
  <div className='row' style={inputFormStyle}>
    <div className='col s3' />
    <form className='col s6' style={inputFormStyle}>
      <div className='row center'>
          <input placeholder='Username' id='user' type='text' className='validate' />
          <label htmlFor='user' />

          <input placeholder='Password' id='pass' type='text' className='validate' />
          <label htmlFor='pass' />
          <Link to='/' className='waves-effect waves-light btn light-green accent-4'style={buttonStyles}>Login</Link>
          <Link to='/' className='waves-effect waves-light btn light-green accent-4'style={buttonStyles}>Login with...</Link>
      </div>
    </form>
    <div className='col s3' />
  </div>
)

export default Login

const inputFormStyle = {
  // border: 'solid black 1px'
  padding: '20px'
}

const buttonStyles = {
  margin: '10px'
}

// Note to self:
// Should our buttons be <a> tags or <Link /> components?
