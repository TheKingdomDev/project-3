import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider, createNetworkInterface
} from 'react-apollo'

const API = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
  }),
}) 



module.exports = {
  API
}
