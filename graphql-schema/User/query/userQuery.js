const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } = require('graphql')

const userType = require('../userType')
const dbUser = require('../../../models/User')

const userQuery = {
  type: new GraphQLList(userType),
  args: {
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    email: { type: GraphQLString },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve(root, {_id, email, limit, offset,}, _, ast) {
    return dbUser.find()
      .limit(args.limit).skip(args.offset).exec()
  }
}

const authUserQuery = {
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

module.exports = {
  userQuery,
  authUserQuery
}