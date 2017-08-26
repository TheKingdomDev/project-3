const { GraphQLObjectType } = require('graphql')

const { meUpdate } = require('./User/mutations/userUpdate.js')
const { taskCreate, taskUpdate, taskDelete } = require('./Task/mutations/taskCreate.js')
const { projectCreate, projectUpdate, addCollaborator, removeCollaborator } = require('./Project/mutations/projectCreate.js')

module.exports = new GraphQLObjectType({
  name: 'Mutations',
  description: 'create, update and delete records.',
  fields() {
    return {
      meUpdate,
      taskCreate,
      taskUpdate,
      taskDelete,
      projectCreate,
      projectUpdate,
      addCollaborator,
      removeCollaborator
    }
  }
})