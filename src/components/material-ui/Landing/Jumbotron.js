import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

const styles = {
  height: 420,
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: `url(http://www.toddedwardsweb.com/img/teCodeVideo_bg.jpg)`,
  fontFamily: 'Share Tech Mono'
}

const intro = {
  backgroundColor: 'rgba(224, 224, 224, 0.5)',
  borderRadius: '7px',
  height: 220,
  width: 600,
  margin: '0 auto',
  marginTop: 55
}

const btn = {
  button: {
    margin: 12,
    backgroundColor: 'rgb(110, 206, 90)'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
}

const Jumbotron = () => (
  <Paper style={styles} key='Jumbotron'>
    <section
      id='intro-container'
      style={intro}>
    </section>
    <div id='login-btn'>
      <RaisedButton
        label='Login with GitHub'
        backgroundColor='#64DD17'
        icon={<FontIcon className='muidocs-icon-custom-github' />}
      />
    </div>
  </Paper>
)

export default Jumbotron
