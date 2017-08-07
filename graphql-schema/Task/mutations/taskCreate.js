const { GraphQLNonNull, GraphQLString } = require('graphql')

const taskType = require('../taskType.js')
const taskInputType = require('../taskInputType.js')

const dbTask = require('../../../models/Task.js')

const taskCreate = {
  type: taskType,
  args: {
    projectId: {
      name: 'projectId',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(taskInputType)
    }
  },
  resolve (root, { data }) {
    return dbTask.create(data)
      .then((task) => {
        dbProject.update({
            _id: projectId
          }, {
            $push: {
              tasks: task._id
            }
          }
        )
      })
  }
}

const taskUpdate = {
  type: taskType,
  args:{
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(taskInputType)
    }
  },
  resolve (root, { id, data }) {
    return dbProject.findByIdAndUpdate( id, data, {new: true})
  }
}

const taskDelete = {
  type: taskType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (root, { _id }) {
    return dbTask.update({_id: _id}, {status: 'Deleted'})
  }
}

module.exports = {
  taskCreate,
  taskUpdate,
  taskDelete
}
