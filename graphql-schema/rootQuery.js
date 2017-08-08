
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//  Importing Individual Type Queries from reqpective directories
const { userQuery, authUserQuery } = require('./User/query/userQuery')
console.log(authUserQuery)
const projectQuery = require('./Project/query/projectQuery')
const taskQuery = require('./Task/query/taskQuery')
const applicationQuery = require('./Application/query/applicationQuery')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: () => {
    return {
      me: authUserQuery,
      users: userQuery,
      projects: projectQuery,
      tasks: taskQuery,
      applications: applicationQuery
    }
  }
})
