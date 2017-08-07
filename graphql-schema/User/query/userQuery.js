const userType = require('./User/userType')
const dbUser = require('../models/User')

const userQuery = {
  type: new GraphQLList(userType),
  args: {
    _id: { type: GraphQLString },
    email: { type: GraphQLString }
  },
  resolve(root, args, _, ast) {
    return dbUser.find(args)
  }
}

const authUserQuery = {
  type: {
    type: userType,
    resolve(root, args, req, ast) {

      return req.user
        ? dbUser.findOne({ _id: req.user._id })
          .then(res => {
            return res
          })
          .catch(err => err)
        : null
    }
  }
}

module.exports = {
  userQuery,
  authUserQuery
}