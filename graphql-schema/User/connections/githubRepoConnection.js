const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')

const githubRepoType = require('../userSubTypes/githubRepoType.js')

module.exports = new GraphQLObjectType({
  name:  'githubRepoConnection',
  description: 'Connection to User Github Repositories.  Exposes connection information and an array of individual Repos.',
  fields: () => ({
    connectionInfo: {
      type: new GraphQLObjectType({
        name: 'reposConnectionInfo',
        fields: () => ({
          totalRepos: {
            type: GraphQLInt,
            resolve: (arrRepos) => (arrRepos.length)
          }
        })
      }),
      resolve: (arrRepos) => (arrRepos)
    },
    repos: {
      type: new GraphQLList(githubRepoType),
      resolve: (arrRepos)=> ( arrRepos )
    }
  })
})