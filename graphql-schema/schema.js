const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const Query = require('./rootQuery.js')
const Mutations = require('./User/mutations/userUpdate.js')

const Schema = new GraphQLSchema({
  query: Query,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: Mutations
  })
})

module.exports = Schema
