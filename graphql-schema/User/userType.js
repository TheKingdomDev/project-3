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
      userName: {
        type: GraphQLString,
        resolve (user) {
          return user.userName
        }
      },
      firstName: {
        type: GraphQLString,
        resolve (user) {
          return user.firstName
        }
      },
      lastName: {
        type: GraphQLString,
        resolve (user) {
          return user.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve (user) {
          return user.email
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
