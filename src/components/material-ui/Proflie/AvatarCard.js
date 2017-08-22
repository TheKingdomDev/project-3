import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

const AvatarCard = (props) => (
  <section id='avatar-card'>
    <div className='w3-row' id='user-profile-picture'>
      <img id='profile-picture' src={props.profilePicture}
        style={styles.avatar}
        className='w3-cell-center'
      />
    </div>
    <div className='w3-row' id='user-bio'>
      <Paper style={styles.bioBox}>
        <p>{props.userBio}</p>
      </Paper>
    </div>
  </section>
)

export default AvatarCard

const styles = {
  avatar: {
    marginTop: 10,
    border: '3px solid #0D47A1',
    padding: 7,
    boxShadow: '0 2px 10px #777'
  },
  bioBox: {
    maxWidth: '256px',
    padding: 5
  }
}
