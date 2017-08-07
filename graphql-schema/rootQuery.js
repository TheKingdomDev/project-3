
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//  Importing User Db Model and User GraphQL Type
const userType = require('./User/userType')
const dbUser = require('../models/User')


//  Importing Project dbModel and Project GraphQL Type
const projectType = require('./Project/projectType')
const dbProject  = require('../models/Project')

//Importing Task dbModel and Project GraphQL Type
const taskType = require('./Task/taskType')
const dbTask = require('../models/Task.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: () => {
    return {
      me: {
        type: userType,
        resolve(root, args, req, ast) {

          return req.user
            ? dbUser.findOne( { _id: req.user._id } )
              .then(res => {
                return res
              })
              .catch(err => err)
            : null
        }
      },
      users: {
        type: new GraphQLList(userType),
        args: {
          _id: { type: GraphQLString },
          email: { type: GraphQLString }
        },
        resolve(root, args, _, ast) {
          return dbUser.find(args)
        }
      },
      projects: {
        type: new GraphQLList(projectType),
        args: {
          _id: { type: GraphQLString },
          owner: { type: GraphQLString },
          skills: { type: new GraphQLList(GraphQLString)},
        },
        resolve (root, args, _, ast) {
          return dbProject.find(args)
        }
      },
      tasks: {
        type: new GraphQLList(taskType),
        args: {
          _id: { type: GraphQLString },
          assignedTo: { type: GraphQLString },
          project: { type: GraphQLString},
          dueDate: {type: GraphQLString},
          status: {type: GraphQLString}
        },
        resolve (root, args, _, ast) {
          return dbTask.find(args)
        }
      }
    }
  }
})
