import React from 'react'
import { Link } from 'react-router-dom'

const AvatarCard = (props) => (
  <div>
    <div className='card'>
      <div className='card-image'>
        <img style={styles.profilePic} src='http://uog.edu.pk/uog/img/dummy_profile.png'/ >
        <span className='card-title' style={{color: 'black'}}>[Developer Name]</span>
      </div>
      <div className='card-content'>
        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
      </div>
      <div className='card-action'>
        <Link to='/'>This is a link</Link>
      </div>
    </div>
  </div>
)

export default AvatarCard

const styles = {
  profilePic: {
    height: 300,
    widht: 100
  }
}
