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
  localBio: {
    type: String,
    default: null
  },
  githubBio: {
    type: String,
    default: null
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
  githubStats: {
    hireable: Boolean,
    reops: Number,
    followers: Number,
    following: Number,
    accountCreated: Date,
    location: String
  },
  UserSettings: {
    codeWarsUsername: String,
    codeSchoolUsername: String,
    treehouseUsername: String,
    useLocalBio: {
      type: Boolean,
      default: false
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
  },
  createdDate: {
    type: Date,
    default: new Date(),
    required: true
  },
  modifiedDate: {
    type: Date,
    default: null
  }
  //TODO: Github stuffs
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
    return this.findOneAndUpdate(args, user, { new: true})
      .then(dbUser => {
        return dbUser
          ? dbUser
          : this.create(user)
      })
      .catch(err => err)
  }

module.exports = mongoose.model('User', UserSchema)
