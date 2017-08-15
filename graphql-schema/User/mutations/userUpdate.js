const { GraphQLNonNull, GraphQLString } = require('graphql')

const UserType = require('../userType.js')
const UserInputType = require('../userInputType.js')

const dbUser = require('../../../models/User.js')

const meUpdate = {
  type: UserType,
  args:{
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInputType)
    }
  },
  resolve (root, { _id, data }) {
    return dbUser.findOneAndUpdate( _id, data, { new: true })
  }
}

module.exports = {
  meUpdate
}