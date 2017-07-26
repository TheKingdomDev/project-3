const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
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
  }],

})

//  Designed for user on a New User, salts/hashes a User's Password and returns a Promise.
UserSchema.methods.setPassword = function () {
  
  return new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        this.password = hash
        if (err) {
          reject(err);
        }
        else {
          resolve(this);
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
