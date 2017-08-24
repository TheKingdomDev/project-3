//  importing request-promise for Third Party API Calls
const rp = require('request-promise')

//  Importing necessary Types from graphql library
const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

//  Importing dbModels for use in Resolvers
const dbProject = require('../../models/Project')

//  Importing subTypes including userSettings and 3P API connections
const userSettingsType = require('./userSubTypes/userSettingsType')
const codeWarsType = require('./userSubTypes/codeWarsType')
const codeSchoolType = require('./userSubTypes/codeSchoolType')
const treehouseType = require('./userSubTypes/treehouseType')

//  Importing Connection Types information to Other objects (i.e. Projects)
const projectConnectionType = require('./connections/projectConnection')
const githubRepoConnection = require('./connections/githubRepoConnection')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'This is a User',
  fields: () => (
     {
      _id: {
        type: new GraphQLNonNull(GraphQLString),
        resolve (user) {
          return user._id
        }
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email
        }
      },
      displayName: {
        type: GraphQLString,
        resolve (user) {
          return user.displayName
        }
      },
      localBio: {
        type: GraphQLString,
        resolve () {
          return user.localBio
        }
      },
      githubBio: {
        type: GraphQLString,
        resolve(user) {
          return user.githubBio
        }
      },
      githubLogin:{
        type: GraphQLString,
        resolve (user) {
          return user.githubLogin
        }
      },
      githubId: {
        type: GraphQLString,
        resolve(user) {
          return user.githubId
        }
      },
      githubProfileURL: {
        type: GraphQLString,
        resolve(user) {
          return user.githubProfileURL
        }
      },
      profilePictureURL: {
        type: GraphQLString,
        resolve(user) {
          return user.profilePictureURL
        }
      },
      skills: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'UserSkills',
          description: 'Coding Skills a User has added to their profile.',
          fields: () => ({
            name: {
              type: GraphQLString,
              resolve: (skill) => (skill.name)
            },
            iconClassName: {
              type: GraphQLString,
              resolve: (skill) => (skill.iconClassName)
            },
            stack: {
              type: GraphQLString,
              resolve: (skill) => (skill.stack)
            }
          })
        })),
        resolve (user) {
          return user.skills
        }
      },
      githubRepoConnection: {
        type: githubRepoConnection,
        resolve (user) {
          return rp({
            uri: `https://api.github.com/users/${user.githubLogin}/repos`,
            headers: { 'User-Agent': 'StackTeam' }
          })
            .then(response => {
              return JSON.parse(response)
            })
            .catch(err => null)
        }
      },
      projectsConnection: {
        type: projectConnectionType,
        resolve (user) {
          return dbProject.find({_id: {$in: user.projects } })
        }
      },
      userSettings: {
        type: userSettingsType,
        resolve (user) {
          return user.UserSettings
        }
      },
      codeWarsData: {
        type: codeWarsType,
        resolve({ codeWars }) {

          return rp(`https://www.codewars.com/api/v1/users/lassiterda`)
            .then(response => {
              return JSON.parse(response)
            })
            .catch(err => null)
        }
      },
      codeSchoolData: {
        type: codeSchoolType,
        resolve({ codeSchool }) {
          return rp(`https://www.codeschool.com/users/${codeSchool}.json`)
            .then(data => {
              return JSON.parse(data).user
            })
            .catch(err => null)
        }
      },
      treehouseData: {
        type: treehouseType,
        resolve ({ treehouse }) {
          return rp('http://teamtreehouse.com/jonathanschneider.json')
            .then(data => {
              return JSON.parse(data)
            })
            .catch(err => null)
        }
      },
      createdDate: {
        type: GraphQLString,
        resolve (user) {
          return user.createdDate
        }
      },
      modifiedDate: {
        type: GraphQLString,
        resolve () {
          return userSettingsType.modifiedDate
        }
      }
    }
  )
})

