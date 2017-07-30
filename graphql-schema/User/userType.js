const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const projectType = require('../Project/projectType.js')

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
          return user.lastName
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
          
        }
      }
    }
  }
})
