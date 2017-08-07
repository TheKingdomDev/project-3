const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectModel = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  primaryTechs: [{
    type: String
  }],
  repository: {
    type: String
  },
  applications: [{
    type: Schema.Types.ObjectId,
    ref: 'Application'
  }]
})

module.exports = mongoose.model('Project', ProjectModel)
