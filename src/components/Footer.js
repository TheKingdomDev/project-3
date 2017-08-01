import React from 'react'

const Footer = () => (
  <footer className='page-footer indigo'>
    <div className='row'>
      {/* <div className='col 16 s12' style={{textAlign: 'center'}}>
          <h4 className='white-text'>Project 3</h4>
        </div> */}
      <div className='col 14 offset-12 s12' style={{textAlign: 'center'}}>
        <p className='white-text'>Created By:</p>
        <p className='white-text'>David Lassiter + Eric King + Juan Carlos Molina + Tim Anderson</p>
      </div>
    </div>
    <div className='footer-copyright' style={{textAlign: 'center'}}>
      <div className='container'>© 2017 UNCC Coding Bootcamp - Team Erlang</div>
    </div>
  </footer>
)

export default Footer
