const { GraphQLNonNull, GraphQLString } = require('graphql')

const UserType = require('../userType.js')
const UserInputType = require('../userInputType.js')

const dbUser = require('../../../models/User.js')

const meUpdate = {
  type: UserType,
  args:{
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInputType)
    }
  },
  resolve:(root, { data }, req) => dbUser.findOneAndUpdate( req.user._id, data, { new: true })
}

module.exports = {
  meUpdate
}