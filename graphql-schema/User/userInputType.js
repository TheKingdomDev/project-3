const {GraphQLInputObjectType, GraphQLString} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'userInput',
  fields: {
    userName: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    codeWars: {
      type: GraphQLString
    },
    codeSchool: {
      type: GraphQLString
    },
    treehouse: {
      type: GraphQLString
    }
  }
})
