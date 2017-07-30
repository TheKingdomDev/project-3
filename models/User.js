const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const UserSettingsSchema = require('./UserSettings')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  githubLogin: {
    type: String,
    required: true
  },
  githubId: {
    type: String,
    required: true
  },
  githubProfileURL: {
    type: String,
    required: true
  },
  profilePictureURL: {
    type: String
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
  }],
  codeWars: {
    type: String
  },
  codeSchool: {
    type: String
  },
  treehouse: {
    type: String
  },
  UserSettings: {
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
  }
})

//  Designed for user on a New User, salts/hashes a User's Password and returns a Promise.
UserSchema.methods.setPassword = function () {
  
  return new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        this.password = hash
        if (err) {
          reject(err)
        }
        else {
          resolve(this)
        }
      })
    })
})
}

UserSchema.statics.findOneOrCreate = function (args, user) {
    return this.findOne(args)
      .then(dbUser => {
        return dbUser
          ? dbUser
          : this.create(user)
      })
      .catch(err => err)
  }

module.exports = mongoose.model('User', UserSchema)
