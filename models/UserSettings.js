const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSettingsSchema =  new Schema({
  showCodewars: {
    type: Boolean,
    default: false
  },
  showcCodeSchool: {
    type: Boolean,
    default: false
  },
  showTreehouse: {
    type: Boolean,
    default: false
  }
})

module.exports = userSettingsSchema



