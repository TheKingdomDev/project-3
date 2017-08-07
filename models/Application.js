//Applications to work on a project. Holds a date, message, user, and status.
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ApplicationModel = new Schema({
  Message: {
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
  status: {
    type: String,
    required: true,
    default: 'Submitted',
    enum: ['Submitted','Accepted','Declined']
  },
})

module.exports = mongoose.model('Application', ApplicationModel)
