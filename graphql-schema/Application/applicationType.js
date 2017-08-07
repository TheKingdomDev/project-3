//Applications to work on a project. Holds a date, message, user, and status.
const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const UserType = require('../User/userType.js')

module.exports = new GraphQLObjectType({
  name: 'Application',
  Description: 'Application to participate in a project.',
  fields: () => ({
    message: {
      type: GraphQLString,
      resolve(application) => (
        application.message
      )
    },
    date: {
      type: GraphQLString,
      resolve(application) => (
        application.createdDate
      )
    },
    owner: {
      type: UserType,
      resolve(application) => (
        application.owner
      )
    },
    status: {
      type: GraphQLString,
      resolve(application) => (
        application.status
      )
    }
  })
})
