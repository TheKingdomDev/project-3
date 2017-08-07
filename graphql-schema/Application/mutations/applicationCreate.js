const { GraphQLNonNull, GraphQLString } = require('graphql')

const ApplicationType = require('../applicationType.js')
const ApplicationInputType = require('../applicationInputType.js')

const dbApplication = require('../../../models/Application.js')
const dbProject = require('../../../models/Project.js')

const applicationCreate = {
  type: ApplicationType,
  args: {
    data: {
      projectId: {
        name: 'projectId',
        type: new GraphQLNonNull(GraphQLString)
      },
      name: 'data',
      type: new GraphQLNonNull(ApplicationInputType)
    }
  },
  resolve (root, { data }, req) {
    data.owner = req.user._id
    return dbApplication.create(data)
      .then((application) => {
        dbProject.update({
          _id: projectId
        }, {
          $push: {
            applications: application._id
          }
        })
      })
  }
}

const applicationUpdate = {
  type: ApplicationType,
  args:{
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(ApplicationInputType)
    }
  },
  resolve (root, { id, data }) {
    return dbApplication.findOneAndUpdate( id, data, {new: true})
  }
}

module.exports = {
  applicationCreate,
  applicationUpdate
}
