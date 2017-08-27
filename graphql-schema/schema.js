const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const Query = require('./rootQuery')
const Mutation = require('./rootMutation')

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})

module.exports = Schema
