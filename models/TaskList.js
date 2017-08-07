//TODO: define task list
// Title
// Project ref
// Task refs

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskListModel = new Schema({
  title: {
    type: String,
    required: true
  },
})
