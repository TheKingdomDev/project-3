const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskModel = new Schema({
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Not Started',
    enum: ['Not Started','Development','Testing','On Hold','Done', 'Deleted']
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dueDate: Date,
  link: String
})

module.exports = mongoose.model('Task', TaskModel)
