const { GraphQLSchema } = require('graphql')

const Query = require('./User/query/UserQuery.js')

const Schema = new GraphQLSchema({
  query: Query
})

module.exports = Schema
