import React from 'react'
import { Link } from 'react-router-dom'
import Bio from './Bio'

const AvatarCard = (props) => (
  <div>
    <div className='card'>
      <div className='card-image'>
        <img style={styles.profilePic} src={props.user.profilePictureURL}/ >
        <span className='card-title' style={{color: 'black'}}>{props.user.displayName}</span>
      </div>
      <div className='card-content'>
        <Bio bio={props.user.githubBio}/>
      </div>
      {/* <div className='card-action'>
        <Link to='/'>This is a link</Link>
      </div> */}
    </div>
  </div>
)

export default AvatarCard

const styles = {
  profilePic: {
    height: 300,
    widht: 100
  },
  cardSize: {
    maxHeight: 250,
    maxHeight: 180
  }
}
