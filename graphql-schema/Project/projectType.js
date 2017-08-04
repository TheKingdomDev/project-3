const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const UserType = require('../User/userType.js')

module.exports = new GraphQLObjectType({
  name: 'Project',
  description: 'Development Project',
  fields: function () {
    return {
      name: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(project) {
          return project.name
        }
      },
      description: {
        type: GraphQLString,
        resolve(project) {
          return project.description
        }
      },
      createdDate: {
        type: GraphQLString,
        resolve (project) {
          return project.createdDate
        }
      },
      owner: {
        type: GraphQLString,
        resolve (project) {
          return project.owner
        }
      },
      collaborators: {
        type: GraphQLString,
        resolve (project) {
          return project.collaborators
        }
      }
    }
  }
})
