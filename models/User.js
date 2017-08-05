const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

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
  //TODO: highlighted skills
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  UserSettings: {
    codeWarsUsername: {
      type: String
    },
    codeSchoolUsername: {
      type: String
    },
    treehouseUsername: {
      type: String
    },
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
    },
    createdDate: {
      type: Date,
      default: new Date(),
      required: true
    },
    modifiedDate: {
      type: Date,

    }
  //TODO: Github stuff
  //TODO: bio
  //TODO: owned projects
})


//   ***NOTE: Currently Unused - will be reimplemented if/when Local Authentication/JWTs is developed ***
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
