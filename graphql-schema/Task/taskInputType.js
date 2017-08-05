const {GraphQLInputObjectType, GraphQLString} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'taskInput',
  fields: {
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    project: {
      type: new GraphQLNonNull(GraphQLString)
    },
    status: {
      type: GraphQLString
    },
    createdDate: {
      type: GraphQLString
    },
    assignedTo: {
      type: GraphQLString
    },
    dueDate: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    }
  }
})
