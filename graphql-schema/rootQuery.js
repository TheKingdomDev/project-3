
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbUser = require('../models/User.js')

const userType = require('./User/userType.js')
const projectType = require('./Project/projectType.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        args: {
          id: { type: GraphQLString },
          userName: { type: GraphQLString },
          email: { type: GraphQLString }
        },
        resolve(root, args) {
          //  TODO - Implement .select method to limit data retuned from db.
          return dbUser.find(args)
        }
      },
      projects: {
        type: new GraphQLList(projectType),
        args: {
          id: { type: GraphQLString },
          owner: { type: GraphQLString },
          skills: { type: new GraphQLList(GraphQLString)},
        },
        resolve (root, args) {

        }
      }
    }
  }
})

