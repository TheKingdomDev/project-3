import React from 'react'
const Footer = () => (
  <footer style={styles.container}>
    <p>Created By:</p>
    <p>David Lassiter + Eric King + Juan Carlos Gonzalez + Tim Anderson</p>
    <div>
      <div>© 2017 UNCC Coding Bootcamp{/* - Team Erlang */}</div>
    </div>
  </footer>
)
const styles = {
  container: {
    height: '10%',
    width: '100%',
    padding: '15px',
    // textShadow: '2px 2px black',
    backgroundColor: '#0D47A1',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Share Tech Mono'
  }
}
export default Footer
