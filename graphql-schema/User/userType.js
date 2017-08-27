//  importing request-promise for Third Party API Calls
const rp = require('request-promise')

//  Importing necessary Types from graphql library
const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

//  Importing dbModels for use in Resolvers
const dbProject = require('../../models/Project')

//  Importing subTypes including userSettings and 3P API connections
const userSettingsType = require('./userSubTypes/userSettingsType')
const codeWarsType = require('./userSubTypes/codeWarsType')
const treehouseType = require('./userSubTypes/treehouseType')

//  Importing Connection Types information to Other objects (i.e. Projects)
const projectConnectionType = require('./connections/projectConnection')
const githubRepoConnection = require('./connections/githubRepoConnection')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a single stackTeam user, connects to both other models (Projects, Tasks), and 3P Info (codewars, github, etc.)',
  fields: () => (
     {
      _id: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: user => user._id
      },
      email: {
        type: GraphQLString,
        resolve: user => user.email
      },
      displayName: {
        type: GraphQLString,
        resolve: user => user.displayName
      },
      githubBio: {
        type: GraphQLString,
        resolve: user => user.githubBio
      },
      githubLogin:{
        type: GraphQLString,
        resolve: user => user.githubLogin
      },
      githubId: {
        type: GraphQLString,
        resolve: user => user.githubId
      },
      githubProfileURL: {
        type: GraphQLString,
        resolve: user => user.githubProfileURL
      },
      profilePictureURL: {
        type: GraphQLString,
        resolve: user => user.profilePictureURL
      },
//    POSSIBLE TODO - Combine with Project Technology into common subtype.
      skills: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'UserSkills',
          description: 'Coding Skills a User has added to their profile.',
          fields: () => ({
            name: {
              type: GraphQLString,
              resolve: skill => skill.name
            },
            iconClassName: {
              type: GraphQLString,
              resolve: skill => skill.iconClassName
            },
            stack: {
              type: GraphQLString,
              resolve: skill => skill.stack
            }
          })
        })),
        resolve: user => user.skills
      },
      userSettings: {
        type: userSettingsType,
        resolve(user) {
          return user.UserSettings
        }
      },
      projectsConnection: {
        type: projectConnectionType,
        resolve: user => dbProject.find({ _id: { $in: user.projects } })
      },
//    TODO - ADD TaskConnection to pull User Tasks

//    Acesses the github REST API to pull informaiton about a User's Repos.  See './connections/githubRepoConnection' for details.
      githubRepoConnection: {
        type: githubRepoConnection,
        resolve: user => (
           rp({
            uri: `https://api.github.com/users/${user.githubLogin}/repos`,
            headers: { 'User-Agent': 'StackTeam' }
          })
          .then(repos => JSON.parse(repos))
          .catch(err => null)
        )
      },
//    Accesses User Data from Codewars API, see './userSubTypes/codeWarsType' for details
      codeWarsData: {
        type: codeWarsType,
        resolve: user => 
          rp(`https://www.codewars.com/api/v1/users/${user.codeWarsUsername}`)
          .then(data => JSON.parse(data))
          .catch(err => null)
      },
      treehouseData: {
        type: treehouseType,
        resolve: user =>
          rp(`http://teamtreehouse.com/${user.treehouseUsername}.json`)
          .then(data =>  JSON.parse(data))
          .catch(err => null)
      },
      createdDate: {
        type: GraphQLString,
        resolve: user => user.createdDate
      }
    }
  )
})

