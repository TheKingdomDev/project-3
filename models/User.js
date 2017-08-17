const mongoose = require("mongoose")

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
  skills: [String],
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
})

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


// {
//   name: {
//     type: String,
//       enum: [],
//     },
//   iconClassName: String,
//     topThree: Boolean
// }