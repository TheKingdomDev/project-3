const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ForumThreadModel = new Schema({
  edit: [{
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    createdDate: {
      type: Date,
      default: new Date()
    }
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  sticky: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('ForumThread', ForumThreadModel)
