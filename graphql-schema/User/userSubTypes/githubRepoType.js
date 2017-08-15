const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList } = require('graphql')

//  importing request-promise for API Calls
const rp = require('request-promise')

module.exports = new GraphQLObjectType({
  name: 'githubRepo',
  description: 'User-specific information on a single Repository pulled from GitHub.',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (repo ) => ( repo.id )
    },
    name: {
      type: GraphQLString,
      resolve: (repo) => ( repo.name )
    },
    description: {
      type: GraphQLString,
      resolve: (repo) => ( repo.description )
    },
    isFork: {
      type: GraphQLBoolean,
      resolve: (repo) => (repo.fork)
    },
    repoURL: {
      type: GraphQLString,
      resolve: (repo) => (repo.url)
    },
    created: {
      type: GraphQLString,
      resolve: (repo) => ( repo.created_at )
    },
    updated: {
      type: GraphQLString,
      resolve: (repo) => ( repo.updated_at )
    },
    sizeKB: {
      type: GraphQLInt,
      resolve: (repo) => ( repo.size )
    },
    primaryLang: {
      type: GraphQLString,
      resolve: (repo) => ( repo.language )
    },
    languages: {
      type: GraphQLString,
      resolve: (repo) => ( rp(repo.languages_url) )
    },
    numForks: {
      type: GraphQLInt,
      resolve: (repo) => ( repo.forks)
    },
    branches: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'gitHubBranch',
        fields: () => ({
          name: { 
            type: GraphQLString,
            resolve: ( branch ) => ( branch.name)
          }
        })
      })),
      resolve: (repo, args, { user }) => (
        rp({
          uri: `https://api.github.com/repos/${args.githubLogin || user.githubLogin}/${repo.name}/branches`,
          headers: { 'User-Agent': 'StackTeam' }
        })
        .then(response => {
          return JSON.parse(response)
        })
        .catch(err => null)
      )
    }
  })
})
