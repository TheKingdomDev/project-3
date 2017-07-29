import React from 'react'
// import Background from '../assets/code-background1.jpg'

const Jumbo = () => (
 <div>
  <div className='card-panel grey lighten-2' style={jumbotronStyle}>
   <div className='container center' >
    <h1>[Project Name]</h1>
    <p>An open source platform for developers to <br />
      find collaborators on active projects, or to <br />
      become collaborators themselves.
    </p>
   </div> 
  </div>
 </div>
)

const jumbotronStyle = {
  padding: '70px',
  boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
  marginTop: 0,
  backgroundImage: `url(http://www.toddedwardsweb.com/img/teCodeVideo_bg.jpg)`,
  color: 'white'
}

export default Jumbo
