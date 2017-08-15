import React from 'react'
import Paper from 'material-ui/Paper'
import LoginBtn from '../../../components/material-ui/Landing/LoginBtn'

const Jumbotron = () => (
  <Paper style={styles} key='Jumbotron'>
    <section
      id='intro-container'
      style={intro}>
    </section>
    <div id='login-btn'>
      <LoginBtn />
    </div>
  </Paper>
)

export default Jumbotron

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
  marginTop: 48
}
