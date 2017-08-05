const {GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'commentInput',
  fields: {
    text: {
      type: GraphQLString
    }
  }
})
