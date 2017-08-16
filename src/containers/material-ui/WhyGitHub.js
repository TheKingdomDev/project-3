import React, { Component } from 'react'
import Navbar from '../../components/Recurrent/LandingNavigation'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'

export default class WhyHitHub extends Component {
  render () {
    return (
      <div id='why-github-main'>
        <div id='why-github-navbar'>
          <Navbar />
        </div>
        <section id='why-github-content-body'>
          <div className='w3-container'
            style={styles.contentBody}>
            <div className='w3-container'>
              <div className='w3-row' id='product-usage-disclaimer'>
                <div className='w3-col s12 m12 l12 w3-center'>
                  <p style={styles.disclaimer}>
                    This application requires users to login through GitHub.
                    If you have an account, simply click the StackTeam logo above
                    to return to the landing page. You can also hit the back button
                    on your browser if you'd like.
                  </p>
                  <Divider />
                </div>
              </div>
            </div>
            <div className='w3-row' id='what-is-github&why-github'>
              <div className='w3-col s12 w3-center'>
                <h2 style={styles.headers}>
                  <Link to='https://github.com/'>
                    <IconButton
                      iconClassName='muidocs-icon-custom-github'
                    />
                  </Link>
                  What is GitHub?
                </h2>
                <p style={styles.about}>
                  An online development hub that uses <Link style={styles.linkColor}
                    to='https://git-scm.com/'> Git version control</Link> to house
                  repositories of code for developers to collaborate on. It is the
                  ideal tool for teams to work on a project together and manage
                  projects of any size.
                </p>
                <Divider />
              </div>
              <div className='w3-col s12 w3-center'>
                <h2 style={styles.headers}>Why Use GitHub?</h2>
                <p style={styles.about}>
                  GitHub is a fantastic tool to manage different versions of the code
                  that you want to work on. Think of it as a detailed map, or tracker, of
                  all the changes that happen during the development cycle. We require our
                  users to have an account and become familiar with it to help them collaborate
                  effectively!
                </p>
                <Divider />
              </div>
            </div>
            <div className='w3-row' id='what-is-stackteam&why-use-it'>
              <div className='w3-col s12 w3-center'>
                <h2 style={styles.headers}>
                  If GitHub already exists... Why should I use StackTeam?
                </h2>
                <p style={styles.about}>
                  StackTeam is an online community, or platform
                  aimed at developers ranging from level of absolute beginner
                  to Junior. Though StackTeam is not limited to only people who
                  fall within these groups, all members of the community can:
                  <ul>
                    <li>
                     - Publish projects for which they seek contributors, with
                      the end-goal of building a <span style={styles.linkColor}>
                      team.</span>
                    </li>
                    <li>
                     - Browse through existing projects to which they can lend
                      their skills, to which they can <span style={styles.linkColor}>
                      contribute </span>
                    </li>
                  </ul>

                  When we say contribute, we refer to taking a certain aspect
                  or feature of a project as a responsibility upon onself, as a <span style={styles.linkColor}>
                  task </span> that needs to be completed. This can be considered as experience <span style={styles.linkColor}>
                  contributing to open source</span><br /><br />

                  For beginners, diving straight into contributing to open source
                  projects can be both a confusing and daunting endeavor, considering
                  that a lot of (though not all) open source projects tend to be of larger
                  scales, usually requiring far more advanced technical skills.<br /><br />

                  StackTeam is a good, accessible alternative for developers who are
                  "just starting their careers" - may they be self-taught, or CodingBootcamp
                  Graduates - and who are interested in becoming involved in the world of
                  open source.
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
  contentBody: {
    color: '#E0E0E0',
    maxWidth: 800,
    margin: '0 auto'
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 18
  },
  headers: {
    fontFamily: 'Cantarell',
    textShadow: '3px 3px 0 #444'
  },
  linkColor: {
    color: '#64DD17'
    // #0D47A1 blue of the navbar
    // '#64DD17' green of login button
  },
  about: {
    fontSize: 17
  }
}

// if github already exists... why use StackTeam at all?
