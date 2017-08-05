const { GraphQLNonNull, GraphQLString } = require('graphql')

const TaskType = require('../taskType.js')
const TaskInputType = require('../taskInputType.js')

const dbTask = require('../../../models/Task.js')

const taskCreate = {
  type: TaskType,
  args: {
    projectId: {
      name: 'projectId',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  resolve (root, { data }) {
    return dbTask.create(data)
      .then((task) => {
        dbProject.findByIdAndUpdate(
          projectId,
          {
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
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(TaskInputType)
    }
  },
  resolve (root, { id, data }) {
    return dbProject.findByIdAndUpdate( id, data, {new: true})
  }
}

module.exports = {
  projectCreate,
  projectUpdate
}
