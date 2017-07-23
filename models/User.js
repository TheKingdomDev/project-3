const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
    lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true
  },
  skills: [{
    type: String,
  }],
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
})


module.exports = mongoose.model('User', UserSchema)
