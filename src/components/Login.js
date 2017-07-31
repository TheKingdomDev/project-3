import React from 'react'
// import { Link } from 'react-router-dom'

const Login = () => (
  // This row contains input forms
  <div className='container'>
    <div className='valign-wrapper'>
      <p>This application requires our users to login through GitHub. If you have an account simply click the button below. If you don't have an account follow this link <a href='http://github.com'>GitHub</a></p>
      <a className='waves-effect waves-light btn'><i className='devicons devicons-github_badge' />Login with GitHub</a>
    </div>
  </div>
)

export default Login

// const inputFormStyle = {
//   // border: 'solid black 1px'
//   padding: '20px'
// }

// const buttonStyles = {
//   margin: '10px'
// }

// Note to self:
// Should our buttons be <a> tags or <Link /> components?
