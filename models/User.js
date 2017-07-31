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
  //TODO: highlighted skills
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  codeWars: {
    type: String
  },
  codeSchool: {
    type: String
  },
  treehouse: {
    type: String
  }
  //TODO: Github stuff
  //TODO: bio
  //TODO: owned projects
})


module.exports = mongoose.model('User', UserSchema)
