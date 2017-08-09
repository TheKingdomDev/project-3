const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')

const userType = require('../userType')
const dbUser = require('../../../models/User')

const userQuery = {
  type: new GraphQLList(userType),
  args: {
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    displayName: { type: GraphQLString }
  },
  resolve(root, { _id, email, displayName, limit, offset}, _, ast) {
    let query = {}
    if(_id) {query._id = _id }
    if (email) { query.email = email }
    if (displayName) { query.displayName = { $regex: displayName, $options: 'i' }}

    return dbUser.find(query)
      .limit(limit)
      .skip(offset)
      .exec()
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

// { "authors": { "$regex": "Alex", "$options": "i" } }