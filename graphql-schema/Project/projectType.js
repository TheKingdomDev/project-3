const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const userType = require('../User/userType.js')

module.exports = new GraphQLObjectType({
  name: 'Project',
  description: 'This is a code project.',
  fields: function() {
    return {
      id: {
        type: GraphQLString,
        resolve(Project) {
          return Project._id
        }
      },
      name: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name
        }
      },
      description: {
        type: GraphQLString,
        resolve(Project) {
          return Project.description
        }
      },
      createdDate: {
        type: GraphQLString,
        resolve(Project) {
          return Project.createdDate
        }
      },
      owner: {
        type: userType,
        resolve(Project) {
          //TODO: get mongoose to pull the user information
        }
      },
      collaborators: {
        type: new GraphQLList(userType),
        resolve(Project) {
          //TODO: as above.
        }
      }
    }
  }
})
