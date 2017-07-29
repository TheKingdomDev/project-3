const {GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'userInput',
  fields: {
    userName: {
      type: GraphQLString
    },
    password: {
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
    skills: {
      type: new GraphQLList(GraphQLString)
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
