const {GraphQLInputObjectType, GraphQLString} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'projectInput',
  fields: {
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    createdDate: {
      type: GraphQLString
    },
    owner: {
      type: GraphQLString
    },
    collaborators: {
      type: new GraphQLList(GraphQLString)
    },
    tasks: {
      type: new GraphQLList(GraphQLString)
    },
    comments: {
      type: new GraphQLList(GraphQLString)
    },
    primaryTechs: {
      type: new GraphQLList(GraphQLString)
    }
  }
})
