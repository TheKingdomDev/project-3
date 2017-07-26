import React from 'react'

const SignUp = () => (
  <div className='row'>
    <form className='col s12'>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='Placeholder' id='firstName' type='text' className='validate' />
          <label htmlFor='firstName'>First Name</label>
        </div>
        <div className='input-field col s6'>
          <input id='lastName' type='text' className='validate' />
          <label htmlFor='lastName'>Last Name</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input id='userName' type='text' className='validate' />
          <label htmlFor='userName'>User Name</label>
        </div>
        <div className='input-field col s6'>
          <input id='email' type='text' className='validate' />
          <label htmlFor='email'>Email</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <input id='password' type='text' className='validate' />
          <label htmlFor='password'>Password</label>
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
