const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')
const dbProject = require('../../../models/Project.js')
const dbUser = require('../../../models/User.js')

const projectType = require('../projectType.js')

module.exports = {
  type: new GraphQLList(projectType),
  args: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    owner: { type: GraphQLString },
    collaborators: { type: GraphQLString },
    primaryTechs: { type: new GraphQLList(GraphQLString) },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt}
  },
  resolve(root, args, req, ast) {
    return dbProject
      .find(args)
      .limit(args.limit)
      .skip(args.offset)
      .populate('owner')
      .populate('collaborators')
      .populate('comments')
      .populate('tasks')
      .exec()
  }
  }
