//object types for Application GraphQL
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'projectInput',
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdDate: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    }
  }
})
