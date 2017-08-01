const { GraphQLNonNull, GraphQLString } = require('graphql')

const ProjectType = require('../projectType.js')
const ProjectInputType = require('../projectInputType.js')

const dbProject = require('../../../models/Project.js')

const projectCreate = {
  type: ProjectType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  resolve (root, { data }) {
    return dbProject.create(data)
  }
}

const projectUpdate = {
  type: ProjectType,
  args:{
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  resolve (root, { id, data }) {
    return dbProject.findOneAndUpdate( id, data, {new: true})
  }
}

module.exports = {
  projectCreate,
  projectUpdate
}
