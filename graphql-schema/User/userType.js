//  importing request-promise for Third Party API Calls
const rp = require('request-promise')

//  Importing necessary Types from graphql library
const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

//  Importing Project Files
const projectType = require('../Project/projectType.js')
const dbProject = require('../../models/Project')

const userSettingsType = require('./userSubTypes/userSettingsType')
const codeWarsType = require('./userSubTypes/codeWarsType')
const codeSchoolType = require('./userSubTypes/codeSchoolType')
const treehouseType = require('./userSubTypes/treehouseType')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'This is a User',
  fields: function() {
    return {
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
        type: new GraphQLList(GraphQLString),
        resolve (user) {
          return user.skills
        }
      },
      projects: {
        type: new GraphQLList(projectType),
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
  }
})

