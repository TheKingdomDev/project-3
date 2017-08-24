const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const UserType = require('../../graphql-schema/User/userType.js')
const projectTechType = require('./projectSubTypes/projectTechType')

module.exports = new GraphQLObjectType({
  name: 'Project',
  description: 'Development Project',
  fields: function () {
    return {
      _id: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(project) {
          return project._id
        }
      },
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
        type: UserType,
        resolve (project) {
          return project.owner
        }
      },
      collaborators: {
        type: new GraphQLList(UserType),
        resolve (project) {
          return project.collaborators
        }
      },
      allTechs: {
        type: projectTechType,
        resolve: (project) => (project.technologies)
      },
      primaryLangs: {
        type: projectTechType,
        resolve: (project) => (
          project.technologies.filter(t => (
            t.stack === 'primary'
        ))
        )
      },
      backEnd: {
        type: projectTechType,
        resolve: (project) => (
          project.technologies.filter(t => (
            t.stack === 'backEnd'
          ))
        )
      },
      frontEnd: {
        type: projectTechType,
        resolve: (project) => (
          project.technologies.filter(t => (
            t.stack === 'frontEnd'
          ))
        )
      }
    }
  }
})
