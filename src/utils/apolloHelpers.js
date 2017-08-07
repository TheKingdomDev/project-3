import {
  ApolloClient,
  gql,
  // graphql,
  /* ApolloProvider, */ createNetworkInterface
} from 'react-apollo'

const API = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin'
    }
  })
})

const isAuthenticated = async function () {
  const res = await API.query({
    query: gql`{
      me {
        _id
      }
    }`
  })

  return res.data.me
    ? true
    : false
}

const getMyInfo = async (objOpts) => {
  return await API.query({
    query: gql`{
      me {
        _id
        displayName
        githubProfileURL
        profilePictureURL
      }
    }`
  })
}

module.exports = {
  API,
  isAuthenticated,
  getMyInfo
}
