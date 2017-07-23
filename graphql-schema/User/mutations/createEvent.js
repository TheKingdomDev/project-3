const { GraphQLNonNull } = require('graphql')

const UserType = require('../userType.js')
const UserInputType = require('../userInputType.js')

const dbUser = require('../../../models/User.js')

module.exports = {
  type: UserType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInputType)
    }
  },
  resolve (root, { data }) {
      return dbUser.create(data)
  }
}