const {GraphQLInputObjectType, GraphQLString } = require('qraphql')

module.exports = new GraphQLInputObjectType({
  name: 'userCreate',
  fields: {
    username: {
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
    }
  }
})