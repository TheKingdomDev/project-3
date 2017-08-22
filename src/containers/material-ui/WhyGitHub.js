import React, { Component } from 'react'
import Navbar from '../../components/Recurrent/LandingNavigation'
import Footer from '../../components/material-ui/Recurrent/Footer'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import { Tabs, Tab } from 'material-ui/Tabs'

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
                  {/* <Divider /> */}
                </div>
              </div>
            </div>
            <div className='w3-row' id='what-is-github&why-github'>
              <section id='swipeable-tabs'>
                <Tabs>
                  <Tab label='Why GitHub?'>
                    <div id='what-is-github' className='w3-col s12 w3-center'>
                      {/* Breaker */}
                      <h2 style={styles.headers}>
                        <a href='https://www.github.com/' target='_blank'>
                          <IconButton
                            iconClassName='muidocs-icon-custom-github'
                          />
                        </a>
                        What is GitHub?
                      </h2>
                      <p style={styles.about} className='w3-left-align'>
                        An online development hub that uses <a style={styles.linkColor} target='_blank'
                          href='https://git-scm.com/'> Git version control</a> to house
                        repositories of code for developers to collaborate on. It is the
                        ideal tool for teams to work on a project together and manage
                        projects of any size.
                      </p>
                      <Divider />
                    </div>
                    {/* Breaker */}
                    <div id='why-use-github' className='w3-col s12 w3-center'>
                      <h2 style={styles.headers}>Why Use GitHub?</h2>
                      <p style={styles.about} className='w3-left-align'>
                        GitHub is a fantastic tool to manage different versions of the code
                        that you want to work on. Think of it as a detailed map, or tracker, of
                        all the changes that happen during the development cycle. We require our
                        users to have an account and become familiar with it to help them collaborate
                        effectively!
                      </p>
                    </div>
                    {/* Breaker */}
                  </Tab>
                  <Tab label='Why StackTeam?'>
                    <div className='w3-col s12 w3-center'>
                      <section id='why-use-stackteam'>
                        <h2 style={styles.headers}>
                          If GitHub already exists... Why should I use StackTeam?
                        </h2>
                        <p style={styles.about} className='w3-left-align'>
                          StackTeam is an online community, or platform
                          aimed at developers ranging from levels of absolute beginner
                          to Junior. Though StackTeam is not limited to only people who
                          fall within these groups, members of the community can:
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
                      </section>
                      <Divider />
                      <section id='stackteam-isNot-new-github'>
                        <h2 style={styles.headers}>
                          Ok, got that. So... is StackTeam the new GitHub?
                        </h2>
                        <p style={styles.about} className='w3-left-align'>
                          A short answer to that is a resounding <span style={styles.linkColor}>
                            NO</span>. <br /><br />

                          We are not trying to reinvent the wheel here. GitHub is something
                          so large and so stable that trying to reinvent it, at least in the
                          modern day and age, would be the pursuit of a madman, or madwoman.
                          <br /><br />

                          While details about projects are listed on StackTeam (e.g. technologies and
                          languages used, stack preference, etc) the code for a project isn't hosted here.
                          All code is uploaded to a GitHub repository belonging to the individual project.
                          <br /><br />

                          When you login through GitHub, StackTeam's API automatically goes out, hits the GitHub API
                          and fetches your GitHub user information; then it comes back and populates your StackTeam profile
                          with said data. In additiong to grabbing basic user profile information [from GitHub],
                          StackTeam's API will also bring back certain <span style={styles.linkColor}>key data</span> such as:
                          <ul>
                            <li>- commit history</li>
                            <li>- collaborations / repos you contribute to</li>
                            <li>- total number of repositories</li>
                            <li>- blah blah blah</li>
                          </ul>

                          StackTeam, then, serves as a bridge, an intermediary platform that allows
                          developers to showcase not only their skills, but also their contributions.
                          In essence, it is a place for "young developers" to gain <span style={styles.linkColor}>
                          real-world</span> experience. It is also a place for them to, proudly and without
                          shame, say:<br /><br />

                          <h3 style={styles.headers} className='w3-center'>
                            "Look, this is what I've done. This is something in which I'm
                            <span style={styles.linkColor}> involved</span>."
                          </h3>
                        </p>
                      </section>
                    </div>
                  </Tab>
                </Tabs>
              </section>
            </div>
            <div className='w3-row' id='what-is-stackteam&why-use-it'>
            </div>
          </div>
        </section>
        <div id='why-github-footer'>
          <Footer />
        </div>
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

