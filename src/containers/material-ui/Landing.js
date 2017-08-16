import React, { Component } from 'react'
import LandingNavigation from '../../components/Recurrent/LandingNavigation'
import Jumbotron from '../../components/material-ui/Landing/Jumbotron'

// This container represents the landing page
export default class Landing extends Component {
  render () {
    return (
      <div id='landing-main'>
        <div id='landing-navbar'>
          <LandingNavigation />
        </div>
        <section id='jumbo-header'>
          <Jumbotron />
        </section>
        <section id='landing-content-body'>
          <div id='product-description'
            className='w3-container w3-cell w3-mobile'
            style={styles.description}
            >
            <div className='w3-row w3-cell-middle w3-center'>
              <div className='w3-col m4' style={styles.column}>
                <p>
                  Search for projects in which your skills
                  may be needed, or create projects and seek
                  for collaborators within the <span style={styles.focus}>
                  community</span>.
                </p>
              </div>
              <div className='w3-col m4' style={styles.column}>
                <p>
                  Found a project you identify with? <br />
                  Have an idea you're passionate about but
                  need help? <br />
                  Interested in starting in open-source? <br />
                  We're here to <span style={styles.focus}>facilitate</span> that.
                </p>
              </div>
              <div className='w3-col m4' style={styles.column}>
                <p>
                  Explore and be part of a community of able
                  handed developers. Whether you contribute or
                  need contribution. Either way, <span style={styles.focus}>
                  you gain</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const styles = {
  description: {
    color: '#E0E0E0',
    fontSize: 18, // change to 20 once font is applied
    // fontFamily: 'Cantarell',
    paddingRight: 100,
    paddingLeft: 100
  },
  focus: {
    color: '#64DD17'
  },
  column: {
    padding: 10
  }
}
