const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')

const githubRepoType = require('../userSubTypes/githubRepoType.js')
const rp = require('request-promise')

module.exports = new GraphQLObjectType({
  name:  'githubRepoConnection',
  description: 'Connection to User Github Repositories.  Exposes connection information and an array of individual Repos.',
  fields: () => ({
    connectionInfo: {
      type: new GraphQLObjectType({
        name: 'reposConnectionInfo',
        fields: () => ({
//        Provides a total of all Repos, both forked and Non-forked
          totalRepos: {
            type: GraphQLInt,
            resolve: (arrRepos) => (arrRepos.length),
          },
          forkedRepos: {
            type: GraphQLInt,
            resolve: (arrRepos => (arrRepos.filter((repo) => !repo.fork).length))
          },
//        Provides an aggregation of all languages used in a User's Repos (non forked.)
          languageBreakdown: {
            type: GraphQLString,
            resolve: (arrRepos, args, { user }) => (
              Promise.all(
//             Removed forked repos               
                arrRepos.filter((repo) => !repo.fork)
//              fetch the languages for each repo
                .map(repo => (
                  rp({ uri: `https://api.github.com/repos/${args.githubLogin || user.githubLogin}/${repo.name}/languages`, 
                       headers: { 'User-Agent': 'StackTeam2' } 
              }))))
              .then(arrLangs => {
                arrLangs.map(ele => JSON.parse(ele))
                .reduce((a, b) => {
//                if the key for the language already exists, sum the values, otherwise create the key
                  for (var p in b) {
                    if (a[p]) a[p] = a[p] + b[p]
                    else a[p] = b[p]
                  }
//                return the modified accumulator
                  return a
              })})
            )
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