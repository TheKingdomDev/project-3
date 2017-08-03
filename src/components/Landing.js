import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
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
            for collaborators within the community
          </p>
        </div>
        <div className='col s4'>
          <p>
            Found a project you identify with? <br />
            Have an idea you're passionate about but
            can't do it alone? <br />
            Interested in starting in open-source? <br />
            We're here to <strong>facilitate</strong> that
          </p>
        </div>
        <div className='col s4'>
          <p>
            Explore and be part of a community of able
            handed developers. Whether you help (verb) or need help;
            either way you gain [exp, this is implied].
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
