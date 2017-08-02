const {GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'userInput',
  fields: {
    email: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    },
    skills: {
      type: new GraphQLList(GraphQLString)
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
