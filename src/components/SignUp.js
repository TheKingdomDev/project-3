import React from 'react'

const SignUp = () => (
  <div className='row'>
    <form className='col s12'>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='First Name' id='firstName' type='text' className='validate' />
          <label htmlFor='firstName'></label>
        </div>
        <div className='input-field col s6'>
          <input placeholder='Last Name' id='lastName' type='text' className='validate' />
          <label htmlFor='lastName'></label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='Username' id='userName' type='text' className='validate' />
          <label htmlFor='userName'></label>
        </div>
        <div className='input-field col s6'>
          <input placeholder='Email' id='email' type='text' className='validate' />
          <label htmlFor='email'></label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <input placeholder='Password' id='password' type='text' className='validate' />
          <label htmlFor='password'></label>
        </div>
        <div className='row'>
          <a className='waves-effect waves-light btn' type='submit' name='action'>Sign Up</a>
          <a className='waves-effect waves-light btn' type='submit' name='action'>Sign Up With: ?</a>
        </div>
      </div>
    </form>
  </div>
)

export default SignUp
