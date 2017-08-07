const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbProject = require('../../../models/Project.js')
const dbUser = require('../../../models/User.js')

const projectType = require('../projectType.js')
const userType = require('../../User/userType.js')

module.exports = {
  type: new GraphQLList(projectType),
  args: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    owner: { type: GraphQLString },
    collaborators: { type: GraphQLString },
    primaryTechs: { type: new GraphQLList(GraphQLString) },
  },
  resolve(root, args, req, ast) {
    return dbProject
      .find(args)
      .populate('owner')
      .populate('collaborators')
      .populate('comments')
      .populate('tasks')
      .exec()
  }
  }
