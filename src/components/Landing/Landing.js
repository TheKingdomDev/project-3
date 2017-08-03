import React from 'react'
import Navbar from '../Recurrent/Navbar'
import Footer from '../Recurrent/Footer'
import Jumbo from './HomeMainHeader'

const Landing = (props) => (
  <div>
    <Navbar />
    <Jumbo />
    <div className='container' style={landingStyles}>
      <div className='row center'>
        <div className='col s4'>
          <p>
            Search for projects in which your skills
            may be needed, or create projects and seek
            for collaborators within the community.
          </p>
        </div>
        <div className='col s4'>
          <p>
            Found a project you identify with? <br />
            Have an idea you're passionate about and
            want help? <br />
            Interested in starting in open-source? <br />
            We're here to <strong>facilitate</strong> that.
          </p>
        </div>
        <div className='col s4'>
          <p>
            Explore and be part of a community of able
            handed developers. Whether you contribute or
            need contribution. Either way, <strong>you gain</strong>.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

const landingStyles = {
  fontFamily: 'Cantarell',
  fontSize: 18
}

export default Landing
