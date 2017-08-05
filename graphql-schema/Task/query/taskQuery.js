const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbProject = require('../../../models/Task.js')
const dbUser = require('../../../models/User.js')

const projectType = require('../projectType.js')
const userType = require('../../User/userType.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'Projects root query',
  fields: () => {
    return {
      projects: {
        type: new GraphQLList(projectType),
        args: {
          _id: { type: GraphQLString },
          name: { type: GraphQLString },
          owner: { type: GraphQLString },
          collaborators: { type: GraphQLString },
          primaryTechs: { type: GraphQLString },
        },
        resolve(root, args) {
          //  TODO - Implement .select method to limit data retuned from db.
          // TODO: limit use of .populate to only calls where
          return dbProject
            .find(args)
            .populate('owner')
            .populate('collaborators')
            .populate('comments')
            .populate('tasks')
            .exec()
        }
      }
    }
  }
})
