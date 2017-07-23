const { GraphQLNonNull, GraphQLString } = require('graphql')

const UserType = require('../userType.js')
const UserInputType = require('../userInputType.js')

const dbUser = require('../../../models/User.js')

const userCreate = {
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

const userUpdate = {
  type: UserType,
  args:{
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInputType)
    }
  },
  resolve (root, { id, data }) {
    return dbUser.findOneAndUpdate( id, data, {new: true})
  }
}

module.exports = {
  userCreate,
  userUpdate
}