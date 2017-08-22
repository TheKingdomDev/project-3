const { GraphQLNonNull, GraphQLString } = require('graphql')

const ProjectType = require('../projectType')
const ProjectInputType = require('../projectInputType')

const dbProject = require('../../../models/Project')
const dbUser = require('../../../models/User')

//Create a New Project
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

//Add a single Collaborator to a Project
const addCollaborator = {
  type: ProjectType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString)
    },
    collaboratorId: {
      name: 'collaboratorId',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, { collaboratorId }) => (
    dbProject.update({_id}, { $push: { collaborators: collaboratorId }}, { new: true })
    .then(newProject => (
      dbUser.update({ _id: collaboratorId }, { $push: { projects: newProject._id }})
    ))
  )
}

//Remove a Single Collaborator from a Project
const removeCollaborator = {
  type: ProjectType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString)
    },
    collaboratorId: {
      name: 'collaboratorId',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, { collaboratorId }) => (
    dbProject.update({ _id }, { $pull: { collaborators: collaboratorId } }, { new: true })
    .then(newProject => (
      dbUser.update({ _id: collaboratorId }, { $pull: { projects: newProject._id } })
    ))
  )
}

// Update the inforation inside a Project
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
  projectUpdate,
  addCollaborator,
  removeCollaborator
}
