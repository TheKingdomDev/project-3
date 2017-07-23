
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbUser = require('../../../models/User.js')

const userType = require('../userType.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        args: {
          _id: { type: GraphQLString },
          userName: { type: GraphQLString },
          email: { type: GraphQLString }
        },
        resolve(root, args) {
          //  TODO - Implement .select method to limit data retuned from db.
          return dbUser.find(args)
        }
      }
    }
  }
})