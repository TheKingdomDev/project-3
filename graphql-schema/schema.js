const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const Query = require('./rootQuery.js')

const { meUpdate } = require('./User/mutations/userUpdate.js')
const { taskCreate, taskUpdate, taskDelete } = require('./Task/mutations/taskCreate.js')
const { projectCreate, projectUpdate, addCollaborator, removeCollaborator } = require('./Project/mutations/projectCreate.js')

const Schema = new GraphQLSchema({
  query: Query,
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    description: 'create, update and delete records.',
    fields (){
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
  }),
})

module.exports = Schema
