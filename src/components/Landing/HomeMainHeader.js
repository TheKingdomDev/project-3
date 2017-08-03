import React from 'react'
import { Link } from 'react-router-dom'

const Jumbo = () => (
  <div>
    <div className='card-panel grey lighten-2' style={jumbotronStyle}>
      <div className='container center' >
        <section style={intro}>
          <h1>{'<StackTeam />'}</h1>
          <p style={contentStyle}>
          An open source community for developers to <br />
          find collaborators for active projects, or to <br />
          become collaborators themselves.
          </p>
        </section>
        <Link to='/login'><a className='waves-effect waves-light btn-large'style={buttonStyle}>
          <i className='material-icons right' />Register</a></Link>
      </div>
    </div>
  </div>
)

const buttonStyle = {
  backgroundColor: '#6ece5a',
  fontFamily: 'Share Tech Mono'
}
const contentStyle = {
  color: 'black',
  fontFamily: 'Cantarell',
  fontSize: 22

}
const jumbotronStyle = {
  padding: '70px',
  boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
  marginTop: 0,
  backgroundImage: `url(http://www.toddedwardsweb.com/img/teCodeVideo_bg.jpg)`,
  color: 'white',
  fontFamily: 'Share Tech Mono'
}

const intro = {
  backgroundColor: 'rgba(224, 224, 224, 0.5)',
  // padding: '5px, 0, 5px, 0', // top, right, bottom, left (tried but didn't look the same!)
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: 'auto',
  paddingRight: 'auto',
  marginBottom: '30px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '600px',
  borderRadius: '7px'
  // color: 'black'
}

export default Jumbo
