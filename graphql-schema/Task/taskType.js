const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Task',
  description: 'Project Task',
  fields: function () {
    return {
      description: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(task) {
          return task.description
        }
      },
      status: {
        type: GraphQLString,
        resolve(task) {
          return task.status
        }
      },
      createdDate: {
        type: GraphQLString,
        resolve (task) {
          return task.createdDate
        }
      },
      assignedTo: {
        type: GraphQLString,
        resolve (task) {
          return task.assignedTo
        }
      },
      dueDate: {
        type: GraphQLString,
        resolve (task) {
          return task.dueDate
        }
      },
      link: {
        type: GraphQLString,
        resolve(task) {
          return task.link
        }
      }
    }
  }
})
