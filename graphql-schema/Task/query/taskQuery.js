const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbTask = require('../../../models/Task.js')

const tastType = require('../taskType.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'Task root query',
  fields: () => {
    return {
      tasks: {
        type: new GraphQLList(taskType),
        args: {
          _id: { type: GraphQLString },
          status: { type: GraphQLString },
          project: { type: GraphQLString },
          assignedTo: { type: GraphQLString },
          dueDate: { type: GraphQLString },
        },
        resolve(root, args) {
          //  TODO - Implement .select method to limit data retuned from db.
          // TODO: limit use of .populate to only calls where
          return dbTask
            .find(args)
            .populate('assignedTo')
            .populate('project')
            .exec()
        }
      }
    }
  }
})
