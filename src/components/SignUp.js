import React from 'react'

const SignUp = () => (
  <div className='row'>
    <form className='col s12'>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='First Name' id='firstName' type='text' className='validate' />
          <label htmlFor='firstName' />
        </div>
        <div className='input-field col s6'>
          <input placeholder='Last Name' id='lastName' type='text' className='validate' />
          <label htmlFor='lastName' />
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='Username' id='userName' type='text' className='validate' />
          <label htmlFor='userName' />
        </div>
        <div className='input-field col s6'>
          <input placeholder='Email' id='email' type='text' className='validate' />
          <label htmlFor='email' />
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <input placeholder='Password' id='password' type='text' className='validate' />
          <label htmlFor='password' />
        </div>
        <div className='row'>
          <a className='waves-effect waves-light btn light-green accent-4' type='submit' name='action'>Login With GitHub</a>
        </div>
      </div>
    </form>
  </div>
)

export default SignUp
