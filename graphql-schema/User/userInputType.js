const {GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'userInput',
  fields: {
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
