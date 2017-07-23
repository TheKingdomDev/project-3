const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const Query = require('./User/query/UserQuery.js')
const Mutations = require('./User/mutations/userCreate.js')

const Schema = new GraphQLSchema({
  query: Query,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: Mutations
  })
})

module.exports = Schema
