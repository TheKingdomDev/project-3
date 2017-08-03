import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import MainNav from '../components/Recurrent/MainNav'
import Footer from '../components/Recurrent/Footer'
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider, createNetworkInterface
} from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql'
  })
})

// Project details page to display the full description of a project as well as show tasks and comments
// Data needed will be the specific project that was clicked.
// Project Data will be (Title, Desc, Tech, Users)
// Other data includes task and comments

class ProjectDetails extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }
  
  componentWillMount () {
    client.query({
      query: gql`{ users {
          id
          displayName
        }
      }`
    })
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })
  }

  render () {
    return (
      <div>
        <MainNav />
        <p>Find the project selected in the database and disply it here.</p>
        <Footer />
      </div>
    )
  }
}

export default ProjectDetails
