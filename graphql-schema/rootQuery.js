
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbUser = require('../models/User.js')

const userType = require('./User/userType.js')
const projectType = require('./Project/projectType.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: () => {
    return {
      me: {
        type: userType,
        resolve(root, args, req, ast) {
          return req.user 
            ? dbUser.find( { id: req.user.id } )
              .then(res => res)
              .catch(err => err)
            : null
        }
      },
      users: {
        type: new GraphQLList(userType),
        args: {
          id: { type: GraphQLString },
          userName: { type: GraphQLString },
          email: { type: GraphQLString }
        },
        resolve(root, args, _, ast) {
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

