import React from 'react'
import Paper from 'material-ui/Paper'
import LoginBtn from '../../../components/material-ui/Landing/LoginBtn'

const Jumbotron = () => (
  <Paper style={styles}
    key='Jumbotron'
    className='w3-mobile'
    >
    <section
      id='intro-container'
      style={intro}
      className='w3-cell-middle w3-mobile'
    >
      <div id='brand-name-and-description'>
        <h1 style={brandName}>{'<StackTeam />'}</h1>
        <p style={productDescription}>
          An open source community for developers to <br />
          find collaborators for active projects, or to <br />
          become collaborators themselves.
        </p>
      </div>

      <div id='login-btn'>
        <LoginBtn />
      </div>
    </section>
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
  height: 320,
  width: 600,
  margin: '0 auto',
  marginTop: 48
}

const brandName = {
  fontFamily: 'Share Tech Mono',
  textShadow: '2.25px 2.25px black',
  paddingTop: 15,
  fontSize: 70
}

const productDescription = {
  color: 'black',
  fontSize: 22,
  fontFamily: 'Cantarell'
}
