const { GraphQLNonNull, GraphQLString } = require('graphql')

const ProjectType = require('../projectType')
const ProjectInputType = require('../projectInputType')

const dbProject = require('../../../models/Project')
const dbUser = require('../../../models/User')

const projectCreate = {
  type: ProjectType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  resolve (root, { data }, req) {
    data.owner = req.user._id
    return dbProject.create(data)
      .then(project => {
        return dbUser.findOneAndUpdate({ _id: project.owner }, { $push: { projects: project._id } }, {new: true})
          .then((user) => {
            project.owner = user
            return project
          })
      })
      .catch(err => err)
  }
}

const projectUpdate = {
  type: ProjectType,
  args:{
    _id: {
      name: '_id',
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
