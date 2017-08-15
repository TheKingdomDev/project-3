import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'

const btn = {
  marginTop: 20
}

const submitForm = () => {
  document.getElementById('login-with-github').submit()
}

const LoginBtn = () => (
  <div>
    <form id='login-with-github'
      method='GET' action='/auth/github/login'>
      <RaisedButton
        label='Login with GitHub'
        style={btn}
        backgroundColor='#64DD17'
        icon={<FontIcon className='muidocs-icon-custom-github' />}
        onClick={submitForm}
      />
    </form>
    <FlatButton
      href='http://localhost:3000/#/login'
      label='Why GitHub?'
      primary={true}
      style={{marginTop: 0, color: '#64DD17'}}
    />
  </div>
)

export default LoginBtn
