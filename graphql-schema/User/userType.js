const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'This is a User',
  fields: function() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString),
        resolve (person) {
          return person._id
        }
      },
      userName: {
        type: GraphQLString,
        resolve (person) {
          return person.userName
        }
      },
      firstName: {
        type: GraphQLString,
        resolve (person) {
          return person.firstName
        }
      },
      lastName: {
        type: GraphQLString,
        resolve (person) {
          return person.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve (person) {
          return person.email
        }
      },
      skills: {
        type: new GraphQLList(GraphQLString),
        resolve (person) {
          return person.skills
        }
      }
    }
  }
})
