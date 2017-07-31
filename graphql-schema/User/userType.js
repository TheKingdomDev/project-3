const rp = require('request-promise')
const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const projectType = require('../Project/projectType.js')
const dbProject = require('../../models/Project')

const codeWarsType = require('./userSubTypes/codeWarsType')
const codeSchoolType = require('./userSubTypes/codeSchoolType')
const treehouseType = require('./userSubTypes/treehouseType')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'This is a User',
  fields: function() {
    return {
      id: {
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
      githubLogin:{
        type: GraphQLString,
        resolve (user) {
          return user.githubLogin
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
        type: projectType,
        resolve (user) {
          return dbProject.find({_id: {$in: user.projects } })
        }
      },
      codeWarsData: {
        type: codeWarsType,
        resolve({ codeWars }) {

          return rp(`https://www.codewars.com/api/v1/users/${codeWars}`)
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
              console.log(JSON.parse(data).points['Development Tools'])
              return JSON.parse(data)
            })
            .catch(err => null)
        }
      }
    }
  }
})
